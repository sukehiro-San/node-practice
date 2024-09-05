const express = require("express");
const status = require("express-status-monitor");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(status());
app.get("/", (req, res) => {
    fs.readFile("./logs.txt",(err,result)=>{
        console.log("aaa");
        res.status(200).send("<h1>Hello from server</h1>");
    });
})

app.listen(1337,()=>console.log("server running on port 1337"))