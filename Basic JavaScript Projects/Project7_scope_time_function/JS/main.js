var x = 10;

function addNumbers1()
{
    document.write(20+x+ "<br>");
}

function addNumbers2()
{
    document.write(x+100);
}

addNumbers1();
addNumbers2();

function getDate()
{
    if (new Date().getHours() < 18) 
    {
        document.getElementById("greeting").innerHTML = "How are you today????";
    }
    else
    {
        document.getElementById("greeting").innerHTML = "GO TO BED";
    }
}

function myFunction()
{
    if ((10+10) > 18)
    {
        document.getElementById("conditional").innerHTML = "This text means your code works!";

    }
}

function ageFunction()
{
    age = document.getElementById("age").value;
    if (age >= 18)
    {
        document.getElementById("vote").innerHTML = "Congrats! You can vote!";
    }

    else
    {
        var wait = 18-age;
        document.getElementById("vote").innerHTML = "Congrats! You can vote in " + wait + " years!";


    }
}

function timeFunction()
{
    var time = new Date().getHours();
    var reply;
    if (time <12 == time > 0)
    {
        reply = "It's morning!" 
    }

    else if (time > 12 == time < 18)
    {
        reply = "It is the afternoon!"
    }

    else
    {
        reply = "Go to bed!"
    }

    document.getElementById("timeOfDay").innerHTML = reply;
}