require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working


const express = require("express");
const app = express();
const port = 4000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT,()=>{
    console.log(`Port_Number : ${port}`)
});
