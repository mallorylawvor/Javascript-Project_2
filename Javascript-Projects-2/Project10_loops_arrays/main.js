const { doUntil } = require("async");

/*
subprogram AddTwo(X, y) {
    return x + y;
}
*/
//notes

/* 
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}. -notes */

function Call_Loop() {
    {
        var X = 0;
        while (X <= 4); {
            X++;
        }
    }
    if (X === 4) {
        Loop = "You may go home now.";
    }
    else {
        Loop = " You must keep working.";
    }
    document.getElementById("Loop").innerHTML = Loop;
}
//creating a loop that adds 1 everytime loop excutes until it reaches 4

function string_Length() {
    var Text = "Hello Sunshine.";
    var length = Text.length;
    document.getElementById("day").innerHTML = length;
}
// string length

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// "for loops"

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
//arrays

function array_Function() {
    var Array_1 = [];
    Array_1[0] = "Morning";
    Array_1[1] = "Afternoon";
    Array_1[2] = "Evening";
    Array_1[3] = "Midnight";
    document.getElementById("Array").innerHTML = "The day starts in the " + Array_1[0] + ".";
}
//my array 

function myFunction() {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

function constant_function() {
    const Musical_Instument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instument.color = "bule";
    Musical_Instument.price = "$900";
    document.getElementById("Constant").innerHTML = "The coust of the " + Musical_Instument.type + " was " + Musical_Instument.price;
}

const XY = 10;
XY = 2;
document.write(XY);

var YZ = 10;
YZ = 7;
document.write(YZ);
//constants

//let vs var
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//output = 82, 33, 82

var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
// output = 82,33,33




function myPi_Function() {
    return Math.PI;
    document.getElementById("myPi").innerHTML = Math.PI;
}
//return statements

let mycar_Function(){
    make: "Dodge ";
    model: "Viper ";
    year: "2021 ";
    color: "red ";
    description: Functin() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car").innerHTML = mycar_Function().description();
//object

let break_statement = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    break_statement += "the number is " + i + ("<br>");
}
document.getElementById("demo").innerHTML = break_statement;
//break statement

let cont_statement
for (let i = 1; i < 10; i++) {
    if (i === 3) { continue; }
    text += i * 10 + "<br>";
}
document.getElementById("continue").innerHTML = cont_statement;
// contniue statement 