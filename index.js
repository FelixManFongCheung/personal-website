document.querySelectorAll('.btn-group button').forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById(element.dataset.project).classList.add('active');
        document.querySelector('.mask').style.display = 'block';
    })
})

document.querySelectorAll('.mask').forEach(element => {
    element.addEventListener('click', function() {
        element.parentElement.classList.remove('active');
    })
})

document.querySelector('.mask').addEventListener('click', function() {
    document.querySelector('.content.active').classList.remove('active');
    document.querySelector('.mask').style.display = 'none';
})

    
function randomizePosition(element, parentDiv) {
    // Only run if screen width is greater than 768px
    if (window.innerWidth <= 768) return;
    
    // Get parent's dimensions
    const parentHeight = parentDiv.clientHeight;
    const parentWidth = parentDiv.clientWidth;
    
    // Calculate maximum positions while keeping link fully inside parent
    const maxTop = Math.max(0, parentHeight - element.clientHeight);  // 50 is link height
    const maxLeft = Math.max(0, parentWidth - element.clientWidth); // 100 is link width
    
    // Generate random positions within safe bounds
    const randomTop = Math.min(Math.floor(Math.random() * maxTop), maxTop);
    const randomLeft = Math.min(Math.floor(Math.random() * maxLeft), maxLeft);
    
    // Apply random position
    element.style.position = 'absolute';
    element.style.top = `${randomTop}px`;
    element.style.left = `${randomLeft}px`;
}

document.querySelectorAll('.content a').forEach(element => {
    const parentDiv = element.parentElement;
    randomizePosition(element, parentDiv);
})