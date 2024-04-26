"use scripts";
var studentName = "Ian";
var studentMajor = "CSCI";
var dept;
var major;

if (studentMajor == "CSCI") {
    dept = "Sheppard Fall, Room 314";
    major = "Computer Science";
}
else if (studentMajor == "BIOL") {
    dept = "Science Gldg, Room 310";
    major = "Biology";
}
else if (studentMajor == "ENG") {
    dept = "kerr Hall, Room 201";
    major = "English";
}
else if (studentMajor == "HIST") {
    dept = "kerr Hall, Room 201";
    major = "History";
}
else if (studentMajor == "MKT") {
    dept = "Westly Hall, Room 310";
    major = "Marketing";
}
else{
    dept = "Unknown";
    major = "Unknown";
}

console.log("Student: " + studentName);
console.log("Major: " + major);
console.log("Advising Location: " + dept);
