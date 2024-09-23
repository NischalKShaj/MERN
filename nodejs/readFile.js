// <======================= file to show how to read a file using an api ===============>

// importing the required modules
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// creating the api to read the file
app.get("/read-file", (req, res) => {
  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
      res.status(403).json({ message: "unable to read the file" });
    }
    res.status(202).json({ content: data });
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
