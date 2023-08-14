const express = require("express");
const router = express.Router();


router.get("/register", (req,res) => {
    res.send('<h1>I am get request at register router</h1>');
    res.end();
});

router.get("/login", (req,res) => {
    res.send('<h1>I am get request at register router</h1>');
    res.end();
});


module.exports = router;