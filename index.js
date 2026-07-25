const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

// get all devlog entries, newest first
app.get("/api/devlog", async (req, res) => {
  try {
    const entries = await db.getAll();
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch devlog entries." });
  }
});

// add a new devlog entry
app.post("/api/devlog", async (req, res) => {
  const { day, title, detail } = req.body;

  if (!day || !title || !detail) {
    return res.status(400).json({ error: "day, title, and detail are all required." });
  }

  try {
    const newEntry = await db.addEntry(day, title, detail);
    res.status(201).json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not add devlog entry." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
