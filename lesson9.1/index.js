const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register",(req,res) =>{
    
    res.sendFile(__dirname + "/index.html")
})

app.post("/register",(req,res) =>{
    const fullName = req.body.fullName;
    const age = req.body.age;

    res.send(`<h1>Your name is ${fullName} and age is ${age}</h1>`)
})

/* app.post("/user",(req,res) =>{
    const name = req.body.name;

    res.send(`Welcome ${name}`)
}) */

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})