function moveNoButton() {
    const noButton = document.getElementById('no-btn');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
noButton.style.transform = `translate(${x}px, ${y}px)`;
}