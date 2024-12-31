const cat = document.getElementById('cat');
const button = document.getElementById('confetti-button');

document.addEventListener('mousemove', (e) => {
    cat.style.left = `${e.pageX}px`;
    cat.style.top = `${e.pageY}px`;
});

button.addEventListener('click', () => {
    throwConfetti();
});

function throwConfetti() {
    const confettiCount = 200;
    const confettiColors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];

    for (let i = 0; i < confettiCount; i++) {
        createConfetti(confettiColors[Math.floor(Math.random() * confettiColors.length)]);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.top = `${Math.random() * window.innerHeight}px`;
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.animation = `fall 3s linear infinite`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
