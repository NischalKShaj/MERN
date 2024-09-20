// <===================== file to invoke the fork method (child)=============>

process.on("message", (message) => {
  console.log("message:", message.msg);
  process.send("hello");
});
