"use strict";

var savingsAccountWorth = 1000;
var numberOfYears;

numberOfyears = 10;

var newWorth;
newWorth = savingsAccountWorth * 2;

var interestRate;
interestRate = 72 / numberOfYears;

var message = "At a " + interestRate + " interest rate, your savings account"
+ " will be worth " + newWorth.toFixed(2) + " in " + numberOfYears.toFixed(1) + " years."