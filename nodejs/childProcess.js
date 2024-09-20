// <========================= file to show the child process ======================>

// importing the required modules
const { spawn, fork, exec, execFile } = require("child_process");

// method spawn
const node = "node";
const version = ["--version"];
const spawning = spawn(node, version);
spawning.stdout.on("data", (data) => {
  console.log(data.toString());
});

// method fork
const child = fork("forkFile.js");

child.send({ msg: "message from parent" });

child.on("message", (message) => {
  console.log(message);
});

// // method exec
exec("ls -l", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  if (stderr) {
    console.log(stderr);
  }
  console.log(stdout);
});

// method execFile
execFile("node", ["test.js"], (err, stdout, stderr) => {
  if (err) {
    console.error("Error executing file:", err);
    return;
  }
  if (stderr) {
    console.error("stderr:", stderr);
  }
  console.log("stdout:", stdout);
});
