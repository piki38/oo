const express = require("express");

const app = express();

const port = 4000;

app.get('/',(req, res)=> res.send("<h1>hello welcom to !</h1>"));

app.listen(port, () => console.log(`My app is listening on port ${port}!`),);
