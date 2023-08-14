const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user",userRouter);



app.use("/", (req,res) => {
    res.send('<h1>I am get request at home router</h1>');
    res.end();
});


app.use((req,res) => {
    res.send('<h1>404!!! Not valid url</h1>');
    res.end();
});


module.exports = app; 