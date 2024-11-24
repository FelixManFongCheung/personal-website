function showEcommerce() {
    document.getElementById('ecommerce').classList.add('show');
}

document.querySelectorAll('.content').forEach(element => {
    element.addEventListener('click', function() {
        this.classList.remove('show');
    });
});