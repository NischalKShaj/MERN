// <==================== file to implement clustering in node.js ================>

// importing the required modules
const express = require("express");
const os = require("os");
const cluster = require("cluster");

// getting the number of cpus
const numCPU = os.cpus().length;

if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);

  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`the worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.get("/", (req, res) => {
    res.status(202).json({ message: `worker of ${process.pid} running` });
  });

  const port = 4000;
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}
