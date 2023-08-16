## Express.js Basics
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
app.get('/login', (req,res)=> {
   res.append("age","Ahmed");
   res.end();
});
```