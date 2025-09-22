alert("Hello JS world!");
window.alert("hello JS world!");
Document.write('another js alert, not used much anymore');

var A = "This is a string";
Document.write(A);

Document.write("I said,\"No! I don't want to go!\" What about Monday\\Tuesday? ");

Document.write("\"Be who you are and say what you feel," + "because those who don\'t matter  and those who matter don\'t mind\"" + "-Dr. Seuss");

var B = "Once upon at time, there was a princess." + " Who dreamed of the sea.";
Document.write(B);

var Pet = "The Queen Bee\'s", Dog1 = "Scooter", Dog2 = "Rowan", Cat = "Beauty", Bird = "CeeCee";
Documentt.write(Dog1);

var C = "5+5";
Document.write(C);

//Not sure why things are not displaying with the Doucument.write or how to fix it. 

function My_First_Function() {
    var str = "This is the button text! ";
    document.getElementById("Button_Text").innerHTML = str;
}