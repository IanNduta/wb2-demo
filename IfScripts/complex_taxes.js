"use strict";
//varibles
var payRate = 17.30;
var hoursWorked = 45;
var overTime = 40;
var grossPayWeekly;
var grossPayAnnual;
var tax;
var stat = single;
var weeklyTaxWithholdings;
var netPayWeekly;


//Formula

var grossPayWeekly = payRate * hoursWorked;

//Over time

if (hoursWorked > overTime){
    var overTimeHours = hoursWorked - 40;
    var overTimePayRate = payRate * 1.5;
    var basePay = 40 * payRate;
    var overTimeCheck = overTimeHours * overTimePayRate;

    grossPayWeekly = basePay + overTimeCheck;

}
else if(grossPayAnnual <= 12000 && stat == "single"){
    taxRate = .05;
}
else if(grossPayAnnual > 12000 && 12000 <= 24,999 && stat == "single"){
    taxRate = .1;
}
else if(grossPayAnnual <= 25000  && 25000 <= 74999 && stat == "single"){
    taxRate = .15;
}
else if(grossPayAnnual <= 74999 &&  stat == "single"){
    taxRate = .20;
}
else if(grossPayAnnual <= 12000 && stat == "joint"){
    taxRate = .05;
}
else if(grossPayAnnual <= 12000 && stat == "joint"){
    taxRate = .05;
}
else if(grossPayAnnual <= 12000 && stat == "joint"){
    taxRate = .05;
}

 weeklyTaxWithholdings =  grossPayWeekly * taxRate;
 netPayWeekly = grossPayWeekly = weeklyTaxWithholdings;

console.log(grossPayAnnual);





