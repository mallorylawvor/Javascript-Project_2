function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

class Customer {
    string FullName;
    Boolean Active;
Customer(string name) {
    FullName = name;
    Active = true;
}
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2022, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colred" + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}

function Person(Age, EyeColor, Hair) {
    this.Person_Age = Age;
    this.Person_EyeColor = EyeColor;
    this.Person_Hair = Hair;
}
var Jerry = new Person(31, "Blue", "Black/short");
var Amy = new Person(27, "Green", "Red/long");
var David = new Person(44, "Hazel", "na/bald");
function my_Function2() {
    document.getElementById("New_and_This").innerHTML = "Amy is a " + Amy.Person_Age + "Female, with " Amy.Person_EyeColor "eys" + "with hair color " + Amy.Hair;
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() (Starting_point += 1;)
        Pluse_one();
        return Starting_point;
    }
}