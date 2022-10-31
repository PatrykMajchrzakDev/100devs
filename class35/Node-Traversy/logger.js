const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

//New var holding Logger class
const logger = new Logger();

//Declaration what to do when var gets event, in this case 'message'
logger.on("message", (data) => console.log("Called listener:", data));

//Passing msg
logger.log("Hello World!");
