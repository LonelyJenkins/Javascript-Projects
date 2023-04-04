function color_function()//utilizing switch function
{
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color! If you have no taste! HA!";
    switch(colors)//a switch is a form of conditional statement
    {
        case "Red"://cases are the conditions to be evaluated in a switch
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default: //'default' keyword is utilized when there is no matching cases and will run the following code
            color_output = "C'mon, type the color exactly as you see it or there WILL be consequences"
    }

    document.getElementById("output").innerHTML = color_output;
}

//CANVAS MODIFIER(GRADIENT)
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,340,0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "hotpink");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 400);
//END CANVAS MODIFIER

var x = document.getElementsByClassName("text");//'text' class from HTML document is referenced here
x[0].innerHTML = "KITTY CAT!";//only the first instance of the text class is modified in this statement as referenced by the index number