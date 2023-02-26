const express = require('express');
const app = express();

var bodyParser = require("body-parser");
const { request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var a = 2;
  var result = num1 + num2; 

  res.send("The result of your calculation is " + result);
})

app.listen(3000, () => {
  console.log("I am in 3000 port.");
});

// BMI Calculator

app.get("/bmiCalculator", (req, res)=>{
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post ("/bmiCalculator", (req, res)=>{

  var weight = Number(req.body.weight);
  var height = Number(req.body.height)/100;

  var bmi = weight/(height*height);

  res.send("Your BMI is " + bmi);

});



