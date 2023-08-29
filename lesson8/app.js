const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user",userRouter);



app.use("/", (req,res) => {
    res.statusCode = 203;
    res.sendFile(__dirname+"/views/index.html")
});

app.use("/register",(req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html")
})

app.use((req,res) => {
    res.send('<h1>404!!! Not valid url</h1>');
    res.end();
});


module.exports = app; 