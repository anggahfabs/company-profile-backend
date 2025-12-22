import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/admin.js";
import contactRoutes from "./routes/contact.js";


const app = express();

// ===== FIX __dirname untuk ES Modules =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== MIDDLEWARE =====
// ===== MIDDLEWARE =====
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== ROUTES =====
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", contactRoutes);


// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("Backend sudah berjalan!");
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
