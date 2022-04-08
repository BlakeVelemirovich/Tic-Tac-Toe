const gridCell = document.querySelectorAll('.cell');
let gameBoard = (input, index) => {
    const mark = (input, index) => {
        
    }
    return {input};
}

gridCell.forEach(cell => {
	cell.addEventListener('click', function () {
		cell.textContent = 'x';
        gameBoard[parseInt(cell.id)] = cell.textContent;
        console.log(gameBoard);
	});
});


