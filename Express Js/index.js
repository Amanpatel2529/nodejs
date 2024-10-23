const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from Home page");
});

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`); 
});

app.listen(8001, () => console.log("Server Started at port 8001"));

 