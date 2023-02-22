const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("I love Vasko!");
});

app.listen(3000, () => {
  console.log("I am in 3000 port.");
});