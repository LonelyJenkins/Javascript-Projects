var x = "Hello, Friend!"
var y = " Don't worry, I am not a zombie!"
var z = "A NEW HAND TOUCHES THE BEACON"

function myFunction()//This will be called when text is entered into the input field//
{
    var str = (x+y);//concatenating x and y variables and assigning them to a new variable//
    str += " Or am I??!"//concatenating an additional sentence to the original string
    document.getElementById("keyPress").innerHTML = str;
}

function buttonPress()//this will be called when user pressed the button element//
{
    var str = (z);//assigning a statement to appear on the button element//
    document.getElementById("buttonDown").innerHTML = str;
}