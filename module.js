// const color = require("cli-color");
// console.log(color.green("Hello world"));

// console.log(color.red("pratice node js"));

//path modules

const Path = require("path");

// console.log("Dir name : ", Path.dirname(__filename));
// console.log("File name : ", Path.basename(__filename));
// console.log("Ext name : ", Path.extname(__filename));
// console.log("Parse name : ", Path.parse(__filename));
// console.log(
//   "Make a new URL : ",
//   Path.join(__dirname, "test", "text.js"),
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("new path is created");
//   }
// );

//file system module
const fs = require("fs");
// fs.mkdir(Path.join(__dirname, "/source"), (e) => {
//   if (e) {
//     throw e;
//   }
//   console.log("folder created");
// });

//fs.writeFile(
//   Path.join(__dirname, "source", "main.txt"),
//   "HELLO WORLD",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file is created");
//   }
// );

// fs.readFile(Path.join(__dirname, "source", "main.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const content = Buffer.from(data);
//   console.log(content.toString());
// });
