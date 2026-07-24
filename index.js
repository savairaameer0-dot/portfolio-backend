const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// simple health check - hit this in the browser to confirm the server is alive
app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

// devlog data - same content as the frontend's script.js for now
// later this can be the single source of truth instead of duplicating it
const devlog = [
  {
    day: "Day 4",
    title: "Built my first backend",
    detail: "Set up a small Express server with a couple of API routes."
  },
  {
    day: "Day 3",
    title: "Added a working contact form",
    detail: "Wired up the contact form using Formspree so visitors can message me directly."
  },
  {
    day: "Day 2",
    title: "Built a portfolio assistant chatbox",
    detail: "Added a rule-based chat widget that answers visitor questions."
  },
  {
    day: "Day 1",
    title: "Started the build-in-public portfolio",
    detail: "Set up the site structure, terminal-style hero, and devlog section."
  }
];

app.get("/api/devlog", (req, res) => {
  res.json(devlog);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
