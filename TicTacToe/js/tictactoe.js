// this variable keeps track of whose turn it is//
let activePlayer = "X";
//This array stores an array of moves. This is used to determine win conditions//
let selectedSquares = [];

//This function is for placing an x or o in a square//
function placeXOrO(squareNumber)
{
    //this condition is to ensure a square hasnt been selected already//
    //The .some() method is used to check each element of the selectSquare array//
    //To see if it contains the square number clicked on//

    if (!selectedSquares.some(element => element.includes(squareNumber)))
    {
        //this variable retrieves the id that was clicked on//
        let select = document.getElementById(squareNumber);
        //this condition checks whose turn it is//

        if (activePlayer === 'X')
        {
            //if the activePlayer == X, the x.png is placed into the html//
            select.style.backgroundImage = 'url("images/X.png")';
        }

        else
        {
                        //if not x, then it will place the o.png//
            select.style.backgroundImage = 'url("images/O.png")';
        }

        //squareNumber and activePlayer are concatenated together and added to array//
        selectedSquares.push(squareNumber + activePlayer);
        
        //this calls a function to check for any win conditions
        checkWinConditions();

        //this condition is for changing the active player//
        if (activePlayer === "X")
        {
            //this changes the player to 'O'//
            activePlayer = "O";
        }
        else
        {//this changes the player to X if it was O
            activePlayer = "X";
        }

        //this function plays the placement sound//
        audio('./media/place.mp3');

        //this checks to see if it's the computer's turn//
        if (activePlayer === "O")
        {
            //this function disables clicking for the computer's turn//
            disableClick();

            //This function waits one second before the computer places an image and enables click//
            setTimeout(function (){computersTurn(); }, 1000);
        }

        //returning true is needed for our computersTurn function to work//

        return true;
            
    }

    function computersTurn()
    {
        //This bool is needed for our while loop//
        let success = false;

        //this variable stores a random number 0-8//
        let pickASquare;

        //this condition allows our while loop to keep trying if a square is selected already//
        while (!success)
        {
            //A random number between 0-8 is selected//
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number returns true it will try again//

            if (placeXOrO(pickASquare))
            {
                //this line calls the function//
                placeXOrO(pickASquare);

                //this changes the boolean and ends the loop//
                success = true;
            };
        }
    }
}

function checkWinConditions()
{
    // X 0,1,2 condition//
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)}
    // X 3,4,5 condition//
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304)}
    //X 6,7,8 condition//
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508)}
    //X 0,3,6 condition//
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558)}
    //X 1,4,7 condition//
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558)}
    //X 2,5,8 condition//
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558)}
    //X 6,4,2 condition//
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90)}
    //X 0,4,8 condition//
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)}
    //O 0,1,2 condition//
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100)}
    //O 3,4,5 condition//
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,100,558,100)}
    //O 6,7,8 condition//
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)}
    //O 0,3,6 condition//
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)}
    //O 1,4,7 condition//
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558)}
    //O 2,5,8 condition//
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)}
    //O 6,4,2 condition//
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90)}
    //O 0,4,8 condition//
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)}

    //This condition checks for a tie. If none of the above conditions are met and all 9 squares are used then this code executes//
    else if (selectedSquares.length >= 9) {
        //this function plays the tied game sound//
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called//
        setTimeout(function () {resetGame();}, 500);
    }

    //this function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC)
    {
        // these variables will be used to check for 3 in a row//
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 variables we pass are all included in our array then true is returned and our else if condition executes the drawLine function//
        if (a === true && b === true && c === true)
        {
            return true;
        }
    }
}

function disableClick()
{
    //This makes our body element temporarily unclickable//
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after one whole second//
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}

//this function takes a string parameter of the path you set earlier for placement sound//
function audio(audioUrl)
{
    //we create a new audio object and we pass the path as a parameter 
    let audio = new Audio(audioUrl);
    audio.play();
}

//this function utilizes the html canvas to draw win lines!//

function drawWinLine(coordX1, coordY1, coordX2, coordY2)
{
    //this accesses our html canvas element
    const canvas = document.getElementById("win-lines");
    //this line gives us access to methods and properties to use on the canvas 
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1 = coordX1,
    //this line indicates where the start of a lines y axis is
        y1 = coordY1,
        //this line indicates where the end of a lines x axis is
        x2 = coordX2,
        //this line indicates where the end of a lines y axis is
        y2 = coordY2,
        //this variable stores temporary axis data we update in our animation loop
        x = x1,
        //this variable stores temporary axis data we update in our animation loop
        y = y1;

        //this function interacts with the canvas

        function animateLineDrawing()
        {
            //this variable creates a loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //this method clears content from the last loop iteration
            c.clearRect(0,0,608,608);
            //this method starts a new path
            c.beginPath();
            //this method moves us to a starting point within our line
            c.moveTo(x1,y1);
            //this method indicates the end point in our line
            c.lineTo(x,y);
            //this method sets the width of our line
            c.lineWidth = 10;
            //this method sets the color of our line
            c.strokeStyle = 'rgba(70,255,33,.8)';
            //this method draws everything laid out above
            c.stroke();

            //this condition checks if we reached the end points
            if (x1 <= x2 && y1 <= y2)
            {
                //this condition adds 10 to the previous end x endpoint
                if (x < x2) { x += 10;}
                //this condition adds 10 to the previous end y endpoint
                if (y < y2) { y += 10;}
                //This condition is similar to the one above. This is necessary for the 6,4,2 win condition 
                if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
            }

            //this condition is similar to the one above. It is necessary for the 6,4,2 win condition
            if (x1 <= x2 && y1 >= y2)
            {
                if (x < x2) {x += 10;}
                if (y > y2) {y -= 10;}
                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
            }
        }

        //this function clears our canvas after the win line is drawn

        function clear()
        {
            //this line starts our animation loop
            const animationLoop = requestAnimationFrame(clear);
            //this line clears our canvas
            c.clearRect(0,0,608,608);
            //this line stops our animation loop
            cancelAnimationFrame(animationLoop);
        }

        //this line disallows clicking while the win sound is playing
        disableClick();
        //this line plays the win sounds
        audio('./media/winGame.mp3');
        //this line calls our main animation loop
        animateLineDrawing();
        //this line waits one second. Then clears canvas, resets game, and allows clicking again
        setTimeout(function () {clear(); resetGame();},1000);
}

//this function resets the game in the event of a tie or win
function resetGame()
{
    //this loop iterates through each html square element
    for (let i = 0; i < 9; i++)
    {
        //this variable gets the html element i
        let square = document.getElementById(String(i));
        //this removes our elements backgroundImage
        square.style.backgroundImage = "";
    }

    //this resets the array so it is empty and we can start over
    selectedSquares = [];
}