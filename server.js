"use strict";
var express = require("express");
var server = express();
var path = require("path");
server.use("/", express.static(path.join(__dirname, "app")));
server.use(
  "/bower_components",
  express.static(path.join(__dirname, "bower_components"))
);

server.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/index.html"));
});

// ############################### Start Random Port ###############################
var net = require("net");

var appPort = 3000;

var srv = net.createServer(function(sock) {
  sock.end("Create Port\n");
});

// srv.listen(0, () => {
//   appPort = srv.address().port
//   srv.close()
// })

async function listenPort() {
  return new Promise(res => {
    srv.listen(0, () => {
      appPort = srv.address().port;
      srv.close();
      res(appPort);
    });
    // let appPort = Math.floor(Math.random() * 3000)+3000;    
    // res(appPort)
  });
}

module.exports = class AppInit {
  constructor() {}

  async getPort() {
    return new Promise(res => {
      listenPort().then(port => {
        // console.log("listen port = ", port);
        res(port);
      });
    });
    // return appPort;
  }

  startServer() {
    return new Promise(res => {
      startServer().then(data => {
        res(true);
      });
    });
  }
};

function startServer() {
  return new Promise(res => {
    // console.log("start server at = ",appPort)
    server
      .listen(appPort, () => {
        console.log("start app listening on port " + appPort + "");
        res(true);
      })
      .on("error", er => {
        console.log("error start server");
        res(false);
      });
  });
}

server.post("/port", function(req, res, next) {
  res.json({ port: appPort });
});

// ############################### End Random Port ###############################

// console.log('on port '+appPort+'!')
// server.listen(appPort, function () {
//   console.log('Example app listening on port '+appPort+'!')
// })
