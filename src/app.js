const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
 res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

module.exports = app;