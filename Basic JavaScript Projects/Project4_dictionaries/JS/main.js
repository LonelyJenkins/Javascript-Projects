function myDictionary() //function that defines a dictionary
{
    var Animal = {
        Species: "Cat",
        Color: "Orange",
        Breed: "Tabby",
        Age: 3,
        Sound: "Meow!!"
    }

    delete Animal.Sound;//sound key is deleted

    document.getElementById("Dictionary").innerHTML=Animal.Sound;//sound key is being called, but is now undefined
}