// <====================== file to show the working of stream =================>

// importing the required modules
const fs = require("fs");
const { Duplex, Transform } = require("stream");

// creating a readable stream
const readableStream = fs.createReadStream("stream.txt");

readableStream.on("data", (data) => {
  console.log(data.toString());
});

// creating a writable stream
const writableStream = fs.createWriteStream("example.txt");

writableStream.write("writing the data to the file using writable stream");
writableStream.end();

// creating a writable stream
const duplex = new Duplex({
  write(chunk, _encoding, callback) {
    console.log("duplex value: ", chunk.toString());
    callback();
  },
});

duplex.write("duplex value");
duplex.end();

// creating a writable stream
const transform = new Transform({
  write(chunk, _encoding, callback) {
    console.log("transform value", chunk.toString().toUpperCase());
  },
});

transform.write("transform data");
transform.end();

process.stdin.pipe(transform).pipe(process.stdout);
