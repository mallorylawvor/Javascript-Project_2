var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");

}
Add_numbers_1();
Add_numbers_2();
//global variable

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");

}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2;
//local variable 

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);

}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2;
//console.log undfined 

if (1 < 2) {
    document.write("the left number is smaller than the number on the right.")
} //if statement 

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Age() {
    if (new Age().getAge() < 18) {
        document.getElementById("AGE").innerHTML = "You cant drive.";
    }
}
// If Stataement

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (age >= 18) {
        Vote = "You are old enough to vote!";
    }

    else {
        vote = "You are NOT old enough to vote!";
    }
    document.getElementById("How_Old_are_you?").innerHTML = Vote;
}
// else statement  

function dog_Function() {
    if (tail = "yes") {
        happy = "Your dog is happy.";
    }
    else {
        happy = " You dog doesnt seem happy";
    }
    document.getElementById("Dog_Happy").innerHTML = happy;
}
// if else assignment 

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is moring time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoo.";
    }
    else {
        Reply = "it is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//if else else statement