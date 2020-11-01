let express = require("express");

let server = express();

server.get("/", function (req, res) {
  res.sendfile("index.html");
});

server.use("/public", express.static("public"));

server.listen(3000);

console.log("Сервер стартовал!");
