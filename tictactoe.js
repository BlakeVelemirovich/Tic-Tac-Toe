const gridCell = document.querySelectorAll('.cell');

gridCell.forEach(cell => {
	cell.addEventListener('click', function () {
		cell.textContent = 'x';
	});
});

