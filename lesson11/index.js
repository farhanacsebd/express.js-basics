const express = require("express");
const app = express();
const PORT = 3000;


const myMiddleWare = (req,res,next) =>{
    console.log('MiddleWare function');

    req.currentTime = new Date(Date.now());
    next();
}

// app.use(myMiddleWare);

app.get("/", myMiddleWare,(req,res) =>{
    console.log('I am home. ' + req.currentTime);
    res.send("<h1>I am home router</h1>")
})

app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})