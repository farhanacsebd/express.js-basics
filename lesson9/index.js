const express = require('express');
const app = express();
const PORT = 3001;

// query parameter
// app.get("/", (req,res) =>{
//     // const id = req.query.id;
//     // const name = req.query.name;
//     const {id,name} = req.query;
//     res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`);
// })


// route parameter
app.get("/userid/:id/userAge/:age",(req,res) =>     {
    const id = req.params.id;
    const age = req.params.age;

    res.send(`<h1>Student id is : ${id} and age is : ${age}</h1>`);
})


// header parameter
app.get("/",(req,res) =>{
    const id = req.header("id");
    const name = req.header("name");

    res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})