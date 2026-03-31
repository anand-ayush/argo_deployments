const express = require("express");
const app = express();

const VERSION = process.env.VERSION || "v1";

app.get("/", (req, res) => {
  res.send(`Hello from Node.js App - ${VERSION}`);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
