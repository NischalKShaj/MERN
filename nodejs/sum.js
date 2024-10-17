// <=================== finding the sum of the values from the params using query params and path params =============>

//importing the required modules
const express = require("express");

const app = express();

// using path params
app.get("/sum/:num1/:num2", (req, res) => {
  const number1 = parseInt(req.params.num1);
  const number2 = parseInt(req.params.num2);

  const sum = number1 + number2;
  res.send(`sum of ${number1} and ${number2} is ${sum}`);
});

// using query params
app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;
  res.send(`sum of ${num1} and ${num2} is ${sum}`);
});

// using middleware
const sum = (req, res, next) => {
  const value = Number(req.params.num1);
  const value2 = Number(req.params.num2);
  const result = value + value2;
  app.locals.sum = result;
  next();
};

app.get("/add/:num1/:num2", sum, (req, res) => {
  res.send(`${app.locals.sum}`);
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
