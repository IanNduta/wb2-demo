"use script";
//varibles
var goodM = "Good Morning!"
var goodD = "Good Day!"
var goodE = "Good Evening"
var time = 15;
if(time < 0){
    console.log("Can you read time?!?!?"); 
}
else if(time <= 10){
    console.log(goodM);
}
else if(time <= 15){
    console.log(goodD);
}
else if(time <= 23){
    console.log(goodE);
}
else{
    console.log("Can you read time?!?!?");
}