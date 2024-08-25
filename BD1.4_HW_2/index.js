let express = require("express");
let app = express();
let port = 3000;

function generateProfileUrl(username){
  let result = "https://github.com/" + username
  return result;
}

app.get("/github-profile", (req,res) => {
  let username = req.query.username;

  res.send(generateProfileUrl(username));
});
  
function generateCertificate(firstName, lastName, courseName){
  let result = "This Certification is awarded to " + firstName + " " + lastName + " for completing the course" + courseName;
  return result;
}
// Endpoint: Generate certificate
app.get("/certificate", (req,res) => {
  let firstName = req.query.firstName;
  let lastName  = req.query.lastName;
  let courseName  = req.query.courseName ;
  res.send(generateCertificate(firstName, lastName, courseName));
});

function CalculateGrade(maths, science, english){
  let gradeInPercentage = ((maths + science + english) / 300 * 100);
  return "Your grade in percentage is" + gradeInPercentage + "%";
}

app.get("/grade", (req,res) => {
  let maths = parseInt(req.query.maths);
  let science  = parseInt(req.query.science);
  let english  = parseInt(req.query.english);
  res.send(CalculateGrade(maths, science, english));
});

function splitBill(billAmount, numberOfFriends){
  let splitAmount = (billAmount /numberOfFriends);
  return "Result: Each friend owes Rs." + splitAmount + "against the bill";
}

app.get("/split-bill", (req,res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends  = parseInt(req.query.numberOfFriends);
  
  res.send(splitBill(billAmount, numberOfFriends));
});

function calculateSalary(totalHours, hourlyWage){
  let monthlySalary = (hourlyWage * totalHours);
  return "Result: Your monthly salary is ₹ " + monthlySalary;
}

app.get("/monthly-salary", (req,res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  res.send(calculateSalary(totalHours, hourlyWage));
});

app.listen(port,() => {
    console.log("Server is running on http://localhost:" + port);
  }); 