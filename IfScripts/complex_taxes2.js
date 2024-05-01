"use strict";


//Compute tax withholdings from a paycheck by calculating tax rate based on annual income, but then withhold a weekly amount.

//Values that we start with.
var payRate = 10.00
var hoursWorked = 45
var overTime = 40
let filingStatus = 'single'  //this can be 'single' or 'joint'

//Values that we need but need to calculate.

//Calculate Gross Pay from previous lab
var grossPay = payRate * hoursWorked;
if (hoursWorked > overTime){
     var overTimeHours = hoursWorked - 40;
     var overTimePayRate = payRate * 1.5;
     var basePay = 40 * payRate;
     var overTimeCheck = overTimeHours * overTimePayRate;

     grossPay = basePay + overTimeCheck;

}
//at this point we have the correct gross pay.


let annualGrossPay = grossPay * 52;

//calcualt the Tax Rate (as a percent)
let taxRate;

if(filingStatus == 'single'){
    //use the 'single' table...
    //todo: use the single table to compute the  taxate based on annual income.
    if(annualGrossPay < 12000){
        taxRate = 0.05;
    }
    else if(annualGrossPay < 25000 ){
        taxRate = 0.1;
    }
    else if(annualGrossPay < 75000 ){
        taxRate = 0.15;
    }
    else{
        taxRate = .20;
    }
    // else if(annualGrossPay >= 75000){
    //     taxRate = .20;
    // }


}
else if (filingStatus == 'joint'){
    //use the 'joint table...
    //todo: use the joint table to compute taxRate based on annual income.
    taxRate = 0.1;

    if(annualGrossPay < 12000){
        taxRate = 0;
    }

    else if(annualGrossPay > 12000 || annualGrossPay <24999 ){
        taxRate = 0.06;
    }
    else if(annualGrossPay >= 25000 || annualGrossPay <= 74999 ){
        taxRate = 0.1;
    }
    else{
        taxRate = .20;
    }
    // else if(annualGrossPay >= 75000){
    //     taxRate = .20;
    // }


}

//now that we have the tax rate..
//compute the tax withholdings:
//todo: compute the taxwithholdings
let taxWithholdings;

taxWithholdings = grossPay * taxRate;
// console.log(taxWithholdings);

//todo: compute the netpay
let netPay = grossPay - taxWithholdings;
// console.log(netPay);


// Display the results...
// (a bunch of console.log statements);

//todo:  Display the output.
console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $ " + payRate + " per hour, your gross pay is $" + grossPay);
console.log("Your filing status is " + filingStatus);
console.log("Your tax withholdings this period is $" + taxWithholdings);
console.log("Your net pay is $" + netPay);
// You worked 45 hours this period.
// Because you earn $10.00 per hour, your gross pay is $475.00
// Your filing status is Single
// Your tax withholdings this period is $47.50
// Your net pay is $427.50