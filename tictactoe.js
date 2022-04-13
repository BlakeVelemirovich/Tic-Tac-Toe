const gridCell = document.querySelectorAll('.cell');

// Player Factory
const players = (name, marker) => {

    // Array and corresponding method for player selection
    let selections = [];
    const playerSelection = (selection) => {

        selections[selection] = marker;
    }

    // Function to check for wins with an array that contains all win conditions
    const didPlayerWin = () => {

        // todo
    }

    return {name, marker, playerSelection};
}

// Defining players using object function factory
const playerOne = players('Player 1', 'x');
const playerTwo = players('Player 2', 'o');

// Each cell is a div in HTML, event listener for clicks
gridCell.forEach(cell => {
	cell.addEventListener('click', function () {
		cell.textContent = 'x';
        gameBoard[parseInt(cell.id)] = cell.textContent;
        console.log(gameBoard);
	});
});
