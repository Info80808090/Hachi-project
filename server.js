import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan di http://0.0.0.0:${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

const dbPromise = open({
  filename: "./database.sqlite",
  driver: sqlite3.Database,
});

dbPromise.then(async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
  console.log("Tabel users siap digunakan");
});

app.post("/register", async (req, res) => {
  const db = await dbPromise;
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Semua field harus diisi!" });
  }

  try {
    await db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
    );
    res.status(201).json({ message: "Registrasi berhasil!" });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      res.status(409).json({ message: "Username atau email sudah digunakan!" });
    } else {
      res.status(500).json({ message: "Terjadi kesalahan server." });
    }
  }
});
