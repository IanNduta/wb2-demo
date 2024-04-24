"use strict";
//varibles
var payRate = 17.30
var hoursWorked = 45
var overTime = 40
var overTimePay = 1.5

//Formula

var grossPay = payRate * hoursWorked;

//Over time

if (hoursWorked > overTime){
     grossPay = parseFloat(payRate * overTimePay *  hoursWorked);
}



console.log(grossPay);

