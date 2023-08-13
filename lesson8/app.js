const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send('I am get request at home router');
    res.end();
});

app.post("/", (req,res) => {
    res.send('I am post request at home router');
    res.end();
});

app.put("/", (req,res) => {
    res.send('I am put request at home router');
    res.end();
});

app.delete("/", (req,res) => {
    res.send('I am delete request at home router');
    res.end();
});


module.exports = app; 