//Create a stopwatch object that has four properties and three methods

let stopwatch = {};
stopwatch.color = "White";
stopwatch.shape = "Oval";
stopwatch.timer = "Digital";
stopwatch.isPocket = false;

stopwatch.isRunningRN = (isRunning) =>
  isRunning === true ? console.log("Running") : console.log("Not running");
stopwatch.start = function () {
  console.log("Starting");
};
stopwatch.stop = function () {
  console.log("Stopping");
};
