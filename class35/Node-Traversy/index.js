//Get Logger from ./logger file
const Logger = require("./logger");

//New var holding Logger class
const logger = new Logger();

//Declaration what to do when var gets event, in this case 'message'
logger.on("message", (data) => console.log("Called listener:", data));

//Passing msg
logger.log("Hello World!");
