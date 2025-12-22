import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Gunakan createPool untuk Serverless (Vercel) agar koneksi tidak putus/hang
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "company_profile",
  port: Number(process.env.DB_PORT) || 3306,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined, // Relax SSL for debugging
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  connectTimeout: 20000 // 20 detik timeout
});

// DEBUG: Cek apakah variable terbaca (Jangan print password!)
console.log("🔍 Checking DB Config...");
console.log("Host:", process.env.DB_HOST ? process.env.DB_HOST : "UNDEFINED");
console.log("Port:", process.env.DB_PORT ? process.env.DB_PORT : "UNDEFINED");
console.log("User:", process.env.DB_USER ? process.env.DB_USER : "UNDEFINED");
console.log("SSL:", process.env.DB_SSL ? "enabled" : "disabled");

// Test koneksi saat pertama kali deploy
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ FATAL: Database Connection Failed!", err.code, err.message);
  } else {
    console.log("✅ Database Connected Successfully!");
    connection.release();
  }
});

export default db;
