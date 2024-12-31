// Cat-following functionality
const cat = document.getElementById("cat");
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the cat to follow the cursor
    cat.style.transform = `translate(${mouseX - 30}px, ${mouseY - 30}px) scale(1.2)`;
});

// Confetti effect triggered by button click
const confettiButton = document.getElementById("confettiButton");

confettiButton.addEventListener("click", () => {
    // Full-screen confetti when button is clicked
    confetti({
        particleCount: 300,          // More particles for a bigger effect
        spread: 360,                 // Spread confetti all around
        origin: { x: 0.5, y: 0.5 },  // Origin at the center of the screen
        colors: ['#ff6f61', '#f5a623', '#4d2c7a'],
        scalar: 2,                   // Size of the confetti particles
        ticks: 200,                  // How long the confetti should fall
        zIndex: 9999                 // Ensure it goes over all other content
    });
});

// Scroll effect to show message after scrolling 500px
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const messageContainer = document.getElementById("message-container");

    // Show the message after scrolling 500px
    if (scrollPosition > 500) {
        messageContainer.style.opacity = "1";
    }
});
