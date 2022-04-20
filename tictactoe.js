const gridCell = document.querySelectorAll('.cell');

// Player Factory
const players = (name, marker) => {

    // Array and corresponding method for player selection
    let selections = [];
    const playerSelection = (selection) => {

        selections[selection] = marker;
        didPlayerWin();
    }

    // Function to check for wins with an array that contains all win conditions
    const didPlayerWin = () => {

        if  (selections[0] === marker && selections[1] === marker && selections[2] === marker
            || selections[3] === marker && selections[4] === marker && selections[5] === marker
            || selections[6] === marker && selections[7] === marker && selections[8] === marker
            || selections[0] === marker && selections[3] === marker && selections[6] === marker
            || selections[1] === marker && selections[4] === marker && selections[7] === marker
            || selections[2] === marker && selections[5] === marker && selections[8] === marker
            || selections[0] === marker && selections[4] === marker && selections[8] === marker
            || selections[2] === marker && selections[4] === marker && selections[6] === marker) {

                console.log('You win');
            }
    }

    return {name, marker, playerSelection};
}

// Defining players using object function factory
const playerOne = players('Player 1', 'x');
const playerTwo = players('Player 2', 'o');
let counter = 1;

// Function to check if number is even or odd
function isOdd(num) { 
    return num % 2;
}

// Each cell is a div in HTML, event listener for clicks
gridCell.forEach(cell => {
	cell.addEventListener('click', function () {
        
        if (isOdd(counter) === 1) { 
            
            cell.textContent = playerOne.marker;
            counter++;
            playerOne.playerSelection(cell.id);
        }
        else if (isOdd(counter) === 0) {
        		
            cell.textContent = playerTwo.marker;
            counter++;
            playerTwo.playerSelection(cell.id);
        }
	});
});