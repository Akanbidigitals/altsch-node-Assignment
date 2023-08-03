const fs = require("fs");
const path = require("path");

/***************************************************************************/

// Create directory student
fs.mkdir("students", (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("file created");
});

/***************************************************************************/

// create file path
// Add your name to the content of thr user.js
// const mypath = path.join(__dirname, "students", "user.js");
fs.writeFile(mypath, "Munirudeen Akanbi ", (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("file created");
});

/***************************************************************************/

// Update the students to "Names"
// const mypath = path.join(__dirname, "students");
fs.rename(mypath, "./Names", (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("file created");
});

/***************************************************************************/

//Update the file and add your age,sex,nationality,phone number
const myDetails = [
  {
    age: 31,
    sex: "male",
    nationality: "Nigerian",
    phoneNumber: "07037147031",
  },
];
const mypath = path.join(__dirname, "Names", "user.js");
fs.appendFile(mypath, JSON.stringify(myDetails), (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("file created");
});

/***************************************************************************/

//Update the file user.js to your_name.js

// const mypath = path.join(__dirname, "Names", "user.js");
const newPath = path.join(__dirname, "Names", "munirudeen_akanbi.js");
fs.rename(mypath, newPath, (err) => {
  if (err) {
    console.log("Error renaming");
  }
  console.log("Renaming successfully");
});

/***************************************************************************/

//Read the contents from your_name.js file
// const newPath = path.join(__dirname, "Names", "munirudeen_akanbi.js");
fs.readFile(newPath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading");
  }
  console.log(data);
});

/***************************************************************************/

//Delete your_name.js
// const newPath = path.join(__dirname, "Names", "munirudeen_akanbi.js");
fs.unlink(newPath, (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("File removed successfully");
});

//Delete the directory "Names"
fs.rmdir("Names", (err) => {
  if (err) {
    console.log("Error detected");
  }
  console.log("file deleted successfully");
});
