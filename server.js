import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
// import db moved inside route 

// import authRoutes from "./routes/authRoutes.js";
// import adminRoutes from "./routes/admin.js";
// import contactRoutes from "./routes/contact.js";

const app = express();
app.set('trust proxy', 1); // Trust Vercel Proxy

// ... (middleware) ...

// ===== ROUTES =====
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api", contactRoutes);


// ===== TEST ROUTE =====
// ===== DEBUG DB ROUTE DIRECT =====

app.get("/api/test-db", async (req, res) => {
  try {
    const { default: db } = await import("./config/db.js");
    const promisePool = db.promise();
    const [rows] = await promisePool.query("SELECT 1 as val");
    res.json({
      status: "SUCCESS",
      message: "Database Connected!",
      config_used: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        db: process.env.DB_NAME
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
      code: error.code,
      config_used: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER
      }
    });
  }
});

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("BACKEND VERSI 2 - DATABASE CHECK READY");
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

// Export app for Vercel
export default app;

// Start server only if not running in Vercel (Vercel manages the process differently, but safe to keep for local dev)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
