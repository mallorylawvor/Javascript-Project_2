Document.write(typeof 45);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}
function my_NanFucntion() {
    document.getElementById("Test2").innerHTML = isNaN('this is a string');
}

function myNanFunction2() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

Document.write(2E310);
Document.write(-3E310);

Document.write(10 > 2); //true
Document.write(10 < 2); //false

console.log(2 + 2);

Document.write(10 == 10); //true
Document.write(3 == 11); //false

X = 10;
Y = 10;
Document.write(X === Y); //True

D = 82;
E = "82";
Document.write(D === E); //Fasle
//works with strings too. 

// JS Boolean logic operators
// AND written as &&
// OR written as ||
// NOT written as !

Document.Write(5 > 2 && 10 > 4); //true
Document.write(5 > 10 && 10 < 4); //false
Document.Write(5 > 10 || 10 > 4); //true

function not_Fucntion() {
    document.getElementById("Not").innerHTML = !(20 > 10);

}