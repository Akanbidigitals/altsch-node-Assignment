const path = require("path");
const process = require("process");
const os = require("os");

// (1) Print the current working directory
const workingDir = path.resolve();
console.log(workingDir);

// (2) Print the seperator of the given path
const seperator = path.sep;
// console.log(seperator);

//(3)Print out the extension name of a file path
// const filePath = "C:UsersUSERDesktopalt-sch_Assighnments";
const extension = path.extname(
  "C:UsersUSERDesktopalt-sch_Assighnments\node_assignmentQ1.js"
);
console.log(extension);

//(4) Print out the process Id of the current running process
const getpid = process.pid;
// console.log(getpid);

//(5)Print out the user information of the Os
const getuser = os.userInfo();
// console.log(getuser);

//(6)Print out the platform of an operation system
const osPlatform = os.platform();
// console.log(osPlatform);
