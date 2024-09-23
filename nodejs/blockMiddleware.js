// <========================== file to demonstrate the blocking of all requests =============>

// importing the required modules
const express = require("express");

const app = express();

// middleware for the blocking purpose
const block = (req, res, next) => {
  res.status(403).json("all the req will be blocked");
};

app.use(block);

app.get("/", (req, res) => {
  res.send("this will never gets invoked");
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
