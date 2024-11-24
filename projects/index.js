function showRyanPortfolio() {
    document.getElementById('ryanPortfolio').classList.add('show');
}

function showItaliaArt() {
    document.getElementById('italiaArt').classList.add('show');
}

document.querySelectorAll('.content').forEach(element => {
    element.addEventListener('click', function() {
        this.classList.remove('show');
    });
});
