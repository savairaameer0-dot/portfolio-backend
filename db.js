require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio"
});

async function getAll() {
  const [rows] = await pool.query("SELECT * FROM devlog ORDER BY id DESC");
  return rows;
}

async function addEntry(day, title, detail) {
  const [result] = await pool.query(
    "INSERT INTO devlog (day, title, detail) VALUES (?, ?, ?)",
    [day, title, detail]
  );
  return { id: result.insertId, day, title, detail };
}

module.exports = { getAll, addEntry };
