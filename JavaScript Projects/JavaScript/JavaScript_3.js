function displayType(character)
{
    var characterType = character.getAttribute("data-character_type");
    alert(characterType + " is in the " + character.innerHTML + " universe! Pretty neat right?!");
}