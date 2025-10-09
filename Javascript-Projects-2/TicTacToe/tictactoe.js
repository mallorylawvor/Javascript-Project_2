//This variable Keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

// THis function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //THis conition ensures a square hasnt been selceted already.
    // the .some() method is used to check each elemtn of lthe selct square array
    // to see if the contains the square number click on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retreives the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks whos turn it is .
        if (activePlayer === 'X') {
            // if activePlayer is equal to X the X.png with be placed in html
            select.style.backgroundImage = 'url("Images/x-tictactoe.png")';
            //active player may only be x or o, so if NOT X it must be O.
        } else {
            // if activePlayer is equal to "O" the O.png is placed in HTML
            select.style.backgroundImage = 'url("Images/o-tic tak toe.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this call a fuction to check for any win conditions.
        checkWinCondtions();
        //this condition is for changing the active player.
        if (activePlayer === 'X') {
            // IF active plauer is X change to O
            activePlayer = 'O';
            //if active player is anyting other than 'X'
        } else {
            //change the activePlayer to x
            activePlayer = 'X';
        }

        //this fuction plays placement sound.
        audio('./media/place Icon.mp3');
        // this conition checks to see if it is the computers turn, 
        if (activePlayer === 'O') {
            // this function disables clicking for the computes turn.
            disableClick();
            // This function waits 1 sec before the comptuer places an image and enable click.
            setTimeout(function () { computerTurn(); }, 1000);
        }
        // Returning true is needed for our computerTurn() function to work.
        return true;
    }
    // this function results in a random square being selected by the computer
    function computerTurn() {
        // this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8.
        let pickASquare;
        // this conition allows our while loop to keep trying if a square is selected already, 
        while (!success) {
            //a random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random nimber evaluated returns true, the square hasnt been selected yet
            if (placeXOrO(pickASquare)) {
                // this line call the function.
                placeXOrO(pickASquare);
                // THis changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
// This function parse the selectSquare array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinCondtions() {
    // X, 0, 1, 2 condtion.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3, 4,5 condtion
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 codtion.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X0,3,6 condtition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X6, 4, 2 condtion.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X0,4,8 condtion
    else if (arrayIncludes('0X', "4X", '8X')) { drawWinLine(100, 100, 520, 520) }
    //O0, 1,2 Condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4,5 condtion
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 codtion.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O0,3,6 condtition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O6, 4, 2 condtion.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O0,4,8 condtion
    else if (arrayIncludes('0O', "4O", '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tiem if non of the above condtitions are met and 
    //9 square are select the colde excutes.
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./Media/tie game.mp3');
        // This function sets .3 second timer for the restGame is called.
        setTimeout(function () { restGame(); }, 1000);
    }
    // This function checks if an array include 3 strings, it is used to chekc for 
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variable will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // IF the 3 variable we pass are all included in our array then 
        // true is returned and our else if condition excutes the dreawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//this function makes our body element temporarily unclickable.
function disableClick() {
    // This make our body unclickable
    body.style.pointerEvents = 'none';
    // This makes out body clickable again after 1 sec
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This fuctions takes ta string parameter of the path you set ealeir for 
//placement sound
function audio(audioURL) {
    //we create a  new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //// play method plays our sound.
    audio.play();
}

//This function utilezes HTML canvas to draw win linees.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line access our HTML canva element.
    const canvas = document.getElementById('win-lines');
    // This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a line x axis is
    let x1 = coordX1,
        //This line indicates where the start of a lines Y axis is
        y1 = coordY1,
        //this line indicates where end of a line x  axis is
        x2 = coordX2,
        //this line indicates where the end of a line y axis is
        y2 = coordY2,
        // thid variable strores temprotary x axis data we updated in our animation loop
        x = x1,
        // this variable stores temporary y axis data we update in our animation loop
        y = y1;
    // This function ineracts with canvas.
    function animateLineDrawing() {
        // This varable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method startd new path
        c.beginPath();
        // This method moves us to a starting point in our line.
        c.moveTo(x, y);
        //this method indicates the end point in our line
        c.lineTo(x, y);
        // This methos set the width of our line
        c.lineWidth = 10;
        //this method sets the color of our lines
        c.strokeStyle = 'rgba(70, 225, 33, .8)';
        // This method draws everything we laid out aboce.
        c.stroke();
        // This conditiion checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            // This condition adds 10 to the previous end x endpoint
            if (x < x2) { x += 10; }
            // This condition adds 10 to the previous end y endpoint
            if (y < y2) { y += 10; }
            // this condition is similar to the one above.
            //this is necessary for the 6, 4,2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // This condition is similar to the one above 
        // This is necessary for the 6,4,2 win condiotn 
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    // This function clears our canvas after ur wine line is drawn
    function clear() {
        // this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas 
        c.clearRect(0, 0, 608, 608);
        // THis lines stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //this line line plays the win sound
    audio('./media/winGame.mp3');
    //This line calls our main aniamtion loop
    animateLineDrawing();
    // This line waits 1 second then clears canvas resets game and allows clicking again,
    setTimeout(function () { clear(); restGame(); }, 1000);


    // this function reset the game in the event of tie or a win
    function restGame() {
        // This for loop iterates through each HTML square element.
        for (let i = 0; i < 9; i++) {
            // This variable get the HTML element i.
            let square = document.getElementById(String(i));
            // This removes our eleemtents backgroundImage
            square.style.backgroundImage = '';
        }
        // this resets our array so it is empty and we can start over
        selectedSquares = [];
    }
}