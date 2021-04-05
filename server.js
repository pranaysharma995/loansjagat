const express = require("express");
const port = process.env.PORT || 8080;
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res){
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("server started...");