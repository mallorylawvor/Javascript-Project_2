function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//concat method

function slice_Method() {
    var Sentence = "All work and now play makes Johhn a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}
// Slice Method

function upperCase_Function() {
    var text = document.getElementById("upper_Case").innerHTML;
    document.getElementById("upper_Case").innerHTML = text.toUpperCase();
}
//toUpperCase method 

var locate = "Please locate where \'locate\' occurs.";
var index = locate.search("locate");
document.getElementById("Find").innerHTML = index;
// search()

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString
}
//numbers method 

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function precision_Number_Method() {
    var Z = 57321.3321;
    document.getElementById("Precision_Number").innerHTML = Z.toPrecision(100);
}
//precision numbers

function toFix_Method() {
    var A = 123.345;
    document.getElementById("to_Fix_Method").innerHTML = A.toFixed();
}
//to_Fixed() method 

function valeOf_method() {
    var X = "Hello World!";
    document.getElementById("value_Of").innerHTML = X.valueOf;
}
// valueOf() method ** little confused on this still. **