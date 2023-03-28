var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;

function for_loop()// loop created to list out each element in the instruments array
{
    for (y=0; y < instruments.length; y++)
    {
        if (y === 5) {break;} //{continue;}
        //'break' is used to abandon the loop at the designated (5th) element and continue the rest of the code.
        //'continue' is used to skip over the designated (5th) element and see the rest of the loop to completion.
        content+=instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function call_loop()//loop that utilizes 'while'. It will count in ascending order until x is no longer less than 11
{
    var digit = "";
    var x = 1;
    while (x<11)
    {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function string_length()//string.length determines the total amount of characters in a designated string
{
    x = "If you can dodge a wrench, you can dodge a ball."
    z = x + "<br>" + x.length;
    document.getElementById("string").innerHTML = z;
}

function cat_pics()// creating a hypothetical array of cat images and referencing one of the elements within it
{
    var cat_pic = [];
    cat_pic[0] = "sleeping";
    cat_pic[1] = "playing";
    cat_pic[2] = "eating";
    cat_pic[3] = "purring";
    document.getElementById("kitty").innerHTML = "In this picture, this kitty is " + cat_pic[2] + ".";
}

function constant_function()//utlizing 'constant' which is an element that is created with the intention of never changing unless specifically referenced
{
    const musical_instrument = {type:"guitar", brand: "fender", color:"black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of this " + musical_instrument.color + " " + musical_instrument.type + " was " + musical_instrument.price;
}


function num()//utilizing 'let' which, opposed to 'var', has block scope
{
    let y = 15;
    document.getElementById("num").innerHTML = y;
}

let car = {//creating a car object
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description: function() {
        return "The car is a " + this.color + this.year + this.make + this.model + " and it's amazing!";
    }
};

document.getElementById("car_object").innerHTML = car.description();//referencing the 'car' object