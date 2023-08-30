const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user",(req,res) =>{
    const name = req.body.name;

    res.send(`Welcome ${name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})