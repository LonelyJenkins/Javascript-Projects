var a = 5;
var b = 10;
var rand = Math.random() * 20;

window.alert(Math.round(rand));//Popup containing a random integer between 0 and 20

//Altering the variables
a++;
b--;



document.write(a);//Displaying the number above 5
document.write(b);//Displaying the number before 10


//Functions containing different math operators
function additionFunction()
{
    var addition = 2+2;
    document.getElementById("math").innerHTML = "2+2= " + addition;
}

function subtractionFunction()
{
    var subtraction = 10-7;
    document.getElementById("subtract").innerHTML = "10-7= " + subtraction;
}

function multiplicationFunction()
{
    var multiply = 10*10;
    document.getElementById("multiply").innerHTML = "10*10=  " + multiply;
}

function divisionFunction()
{
    var divide = 144/12;
    document.getElementById("divide").innerHTML = "144/12= " + divide;
}

function moreMath()
{
    var math = (2+2) + 50/(2) * 3;
    document.getElementById("more_math").innerHTML = "(2+2) + 50/(2) * 3 = " + math;
}

function modulusOperator()
{
    var mod = 25%6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by six, you have " + mod + " left over!";
}

function negationOperator()
{
    var x = 10;
    document.getElementById("negate").innerHTML = -x;
}