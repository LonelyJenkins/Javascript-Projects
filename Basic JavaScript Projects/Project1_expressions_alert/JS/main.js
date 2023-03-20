var x = "Hello "
var y = "Friend!"
var z = (x+y)
var sent1 = "This is the beginning of the string!"
var sent2 = " And this is the end of the string!!"
var sentence = (sent1+sent2);


var family = "The Johns", Dad = "Jay", Mom = "Jan", Son = "Mark", Daughter = "Kay";

function myFunction ()
{
    var str = "This is the button text!"; // This is what will appear when the button is pressed!//
    document.getElementById("Button_Text").innerHTML = str; //This is locating the button element by searching the document for the associated ID, then putting the value of the variable into the html element!//
}

window.alert(z); //Popping up an alert with the text "Hello Friend!"//
document.write(sentence);//Concatenating sent1 and sent2 and printing it onto the webpage//