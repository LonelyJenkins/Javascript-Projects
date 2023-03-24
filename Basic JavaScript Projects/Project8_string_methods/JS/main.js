function fullSentence() //concat() method is to connect 2 or more strings together!
{
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence! Hope ";
    var part_5 = "you're proud of me!";
    var wholeSentence = part_1.concat(part_2,part_3,part_4,part_5);//concat() will combine all the above strings
    var searchWord = wholeSentence.search("proud");//utilizing the search() method to find the character number in which the specified word begins
    document.getElementById("concatenate").innerHTML = wholeSentence + searchWord;//printing the concatenated sentence as well as the character place of the first letter of 'proud'
}

function sliceMethod()//slice() method is used to 'slice' a specific part of a string and return the extracted section as a new string
{
    var sentence = "All work and no play makes Jack a dull boy."
    var section = sentence.slice(27,31); //specifying (by character number) which part of the string we want to 'slice' and create a new string
    document.getElementById("slice").innerHTML = section.toUpperCase();//toUpperCase()method is to capitalize each character in the string
}

function stringMethod()//method that converts number elements into string elements
{
    var x=182;
    document.getElementById("numbersToString").innerHTML = x.toString();//turning the numerical value of x to a string value. It will display the same in text form
}

function precisionMethod()//toPrecision() formats a number to a specified length
{
    var x = 123456.789101112131415;
    document.getElementById("precision").innerHTML = x.toPrecision(10);//formatting x to only 10 digits
}

function fixedMethod()//toFixed() formats a number to a specified length AND converts it to a string!
{
    var x = 123456.789101112131415;
    document.getElementById("fixed").innerHTML = x.toFixed(6); //NOTE: if there is no #, then the number is ROUNDED and then converted to a string 
}

function valueMethod()
{
    var sentence = "The valueOF() method displays the primitive value of the specified element!"
    document.getElementById("value").innerHTML = sentence.valueOf();

}
