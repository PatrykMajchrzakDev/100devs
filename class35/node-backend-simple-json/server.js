const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const readWriteFile = (file, contentType) => {
    fs.readFile(file, function (err, data) {
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    });
  };
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch (page) {
    case "/":
      readWriteFile("index.html", "text/html");
      break;
    case "/otherpage":
      readWriteFile("otherpage.html", "text/html");
      break;
    case "/otherotherpage":
      readWriteFile("otherotherpage.html", "text/html");
      break;
    case "/api":
      let flipResult = "";
      if (params["student"] == "flip") {
        flipResult = Math.random() <= 0.5 ? "heads" : "tails";
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      const objToJson = {
        name: flipResult,
      };
      res.end(JSON.stringify(objToJson));
      break;
    case "/css/style.css":
      fs.readFile("css/style.css", function (err, data) {
        res.write(data);
        res.end();
      });
      break;
    case "/js/main.js":
      readWriteFile("js/main.js", "text/javascript");
      break;
    default:
      //Error catch
      figlet("404!!", function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
      break;
  }

  //Page redirection
  //else if
});

server.listen(8000);

//This was previous api before coin flip

//    case "/api":
// let personName = "unknown";
// let personStatus = "unknown";
// let personOccupation = "unknown";
// if ("student" in params) {
//   if (params["student"] == "leon") {
//     personName = "Leon";
//     personStatus = "Boss man";
//     personOccupation = "Baller";
//   }
// }
// res.writeHead(200, { "Content-Type": "application/json" });
// const objToJson = {
//   name: personName,
//   status: personStatus,
//   currentOccupation: personOccupation,
// };
// res.end(JSON.stringify(objToJson));
// break;
