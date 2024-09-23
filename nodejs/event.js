// <====================== file to show the working of event ===================>

// importing the required modules
const EventEmitter = require("events");

// creating an instance for the event
const event = new EventEmitter();

// event handler
event.on("greet", () => {
  console.log("hello world");
});

// event emitter
event.emit("greet");
