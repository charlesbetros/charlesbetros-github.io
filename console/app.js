const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

//add the router
//app.use("/", router);
app.use("/", express.static(__dirname + "/"));
app.use("/lib/css", express.static(__dirname + "/lib/css"));
app.use("/lib/js", express.static(__dirname + "/lib/js"));
app.use("/plugin", express.static(__dirname + "/plugin"));
app.use("/images", express.static(__dirname + "/images"));

app.listen(process.env.port || 3000);

console.log("Running at Port 3000");