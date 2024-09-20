// <======================= file to show the working of the fs modules =================>

// the mentioned files asyncFile.txt and syncFile.txt got removed after the last method

// importing the required modules
const fs = require("fs");

// for reading the file in async mode
fs.readFile("asyncFile.txt", "utf-8", (err, data) => {
  console.log(data);
});

// for reading the file in sync mode
try {
  const readFile = fs.readFileSync("syncFile.txt", "utf-8");
  console.log(readFile);
} catch (error) {
  console.error(error);
}

// for writing into a file in async mode
fs.writeFile(
  "asyncFile.txt",
  "this is the new data written in the asyncFile.txt",
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Writing in the file completed");
    }
  }
);

// for writing into a file in sync mode
try {
  fs.writeFileSync(
    "syncFile.txt",
    "this is the new data written in the syncFile.txt"
  );
  console.log("writing the data successfully");
} catch (error) {
  console.error(error);
}

// for appending the data in async mode
fs.appendFile("asyncFile.txt", "\nthis is the updated value", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended the file data successfully");
  }
});

// for appending the data in sync mode
try {
  fs.appendFileSync("syncFile.txt", "\nappended data");
  console.log("appended successfully");
} catch (error) {
  console.error(error);
}

// for deleting the file in async mode
fs.unlink("asyncFile.txt", (err) => {
  if (err) console.error(err);
  console.log("file deleted successfully");
});

// for deleting the file in sync mode
try {
  fs.unlinkSync("syncFile.txt");
  console.log("removed successfully");
} catch (error) {
  console.error(error);
}
