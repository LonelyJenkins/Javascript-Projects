function ageFunction()//utilizing :
{
    var age, vote;
    age = document.getElementById("age").value;
    vote = (age > 18) ? "You can vote!" : "You cannot vote!";
    document.getElementById("vote").innerHTML = vote + " Yay!!";
}

function Vehicle(Make, Model, Year, Color) //creating a function to utilize w/in myFunction
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Mitsubishi", "Mirage", 2001, "White");
var Emily = new Vehicle("Nissan", "Altima", 2008, "Brown");
var Erik = new Vehicle("Nissan", "Sentra", 2018, "Silver");

function myFunction()
{
        document.getElementById("New_And_This").innerHTML = "Jack drives a " + Jack.Vehicle_Make + Jack.Vehicle_Model + " that is " + Jack.Vehicle_Color + " from " + Jack.Vehicle_Year + "!";
}

function nestedFunction()
{
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var startingPoint = 9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}