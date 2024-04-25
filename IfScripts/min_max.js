"use script";
var a = 109;
var b = 90;
var c = 160;
var min;
var max;

if( a < b && a < c){
    min = a;
    console.log(min);
    //console.log(a);
}
else if(b < a && b < c){
    min = b;
    console.log(min);
    //console.log(a);
}
else{
    min = c;
    console.log(min);
}

if( a > b && a > c){
    max = a;
    console.log(max);
    //console.log(a);
}
else if(b > a && b > c){
    max = b;
    console.log(max);
    //console.log(a);
}
else{
    max = c;
    console.log(max);
}


//console.log(min);
//console.log(max);