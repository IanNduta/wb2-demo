"use strict";
//varibles
var payRate = 17.30
var hoursWorked = 45
var overTime = 40


//Formula

var grossPay = payRate * hoursWorked;

//Over time

if (hoursWorked > overTime){
     var overTimeHours = hoursWorked - 40;
     var overTimePayRate = payRate * 1.5;
     var basePay = 40 * payRate;
     var overTimeCheck = overTimeHours * overTimePayRate;

     grossPay = basePay + overTimeCheck;

}



console.log(grossPay);

