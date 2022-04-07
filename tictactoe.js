const gridCell = document.querySelectorAll('.cell');

gridCell.forEach(cell => {
    cell.addEventListener('click', function() {
        const choice = document.createTextNode('x');
    });
});