import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Gunakan createPool untuk Serverless (Vercel) agar koneksi tidak putus/hang
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "company_profile",
  port: Number(process.env.DB_PORT) || 4000,
  ssl: {
    rejectUnauthorized: false
  },
  waitForConnections: true,
  connectionLimit: 2, // Kecilin limit buat serverless
  queueLimit: 0,
  connectTimeout: 10000 // 10 detik
});

// DEBUG: Cek apakah variable terbaca (Jangan print password!)
console.log("🔍 DB Config Check:", {
  host: process.env.DB_HOST ? "Exists" : "MISSING",
  port: process.env.DB_PORT || "Default 3306",
  user: process.env.DB_USER ? "Exists" : "MISSING",
  ssl: process.env.DB_SSL
});

export default db;
