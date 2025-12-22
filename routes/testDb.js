import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Coba query simple
    const promisePool = db.promise();
    const [rows] = await promisePool.query("SELECT 1 as val");
    
    res.json({
      status: "SUCCESS",
      message: "Database Connected!", 
      test_result: rows,
      config_loaded: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        ssl_enabled: process.env.DB_SSL === 'true'
      }
    });
  } catch (error) {
    console.error("Test DB Error:", error);
    res.status(500).json({
      status: "FAILED",
      message: "Database Connection Error",
      error_code: error.code,
      error_message: error.message,
      config_loaded: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        ssl_enabled: process.env.DB_SSL === 'true'
      }
    });
  }
});

export default router;
