## Express.js Basics

#### steps:

- express package is a external package, so need to install this package.

- external package install korar jonno, first e `npm init -y` dite hobe. tahole **package.json** file create hobe.

- then, `npm install express nodemon` install kora lagbe.

- nodemon er jonno, **package.json** file e scripts e , **"start": "nodemon index.js"** dite hobe.

### some http method
- post , for creating
- get , for getting
- put , for updating
- delete , for deleting

### http methods and postman
----
- install postman
- if server is off, postman not work.

### http response
---
- body can contain data as html, text, json etc.
- cookies
- headers
- statusCode
----
#### json file send with http response
```javascript
app.get('/register', (req,res)=> {
    res.status(200).json({
        message: "I am register page",
        statusCode: 200,
    })
});
```
#### html file send with http response
```javascript
app.get('/register', (req,res)=> {
    res.statusCode = 200;
    res.sendFile(__dirname +'/views/register.html');
});
```
#### redirect with http response
```javascript
app.get('/register', (req,res)=> {
    res.redirect('/login');
});
```
#### cookie send with http response
```javascript
app.get('/login', (req,res)=> {
    res.cookie('name','Faisal');
    res.cookie('age','25');
    res.end();
});
```
#### clearCookie send with http response
```javascript
app.get('/login', (req,res)=> {
    res.clearCookie('name');
    res.end();
});
```
#### value send with header in http response
```javascript
app.get('/login', (req,res)=> {
   res.append("name","Ahmed");
   res.end();
});
//another cookie
app.get('/login', (req,res)=> {
   res.append("age","30");
   res.end();
});
```
----
## http request
### http request with `query parameter`
- search `http://localhost:3001/?id=101&name=tasmi`
```javascript
const express = require('express');
const app = express();
const PORT = 3001;


app.get("/", (req,res) =>{
    // const id = req.query.id;
    // const name = req.query.name;
    const {id,name} = req.query;
    res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
```
### http request with `route parameter`
- search `http://localhost:3001/userId/101/userAge/25`
```javascript
app.get("/userid/:id/userAge/:age",(req,res) =>     {
    const id = req.params.id;
    const age = req.params.age;

    res.send(`<h1>Student id is : ${id} and age is : ${age}</h1>`);
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
```

### http request with `headers`
```javascript
app.get("/",(req,res) =>{
    const id = req.header("id");
    const name = req.header("name");

    res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`)
})
```
----
## Data send and receive using form
#### handling json file or form using `body-parser`.
1. step1 - `https://www.npmjs.com/package/body-parser`
2. step2 - `npm i body-parser` 
3. step3 - `app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());`
- `index.js` file 

```javascript
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


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
```
- `index.html` file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
</head>
<body>
<h1>Registration</h1>
<form action="/register" method="POST">
    <div>
        <label for="fullName">Full Name: </label>
        <input type="text" name="fullName" id="fullName">
    </div>
    <div>
        <label for="age">Age: </label>
        <input type="text" name="age" id="age">
    </div>
    <button type="submit">Register</button>
</form>
</body>
</html>
```
----
