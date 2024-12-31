// Select the cat image element
const cat = document.getElementById("cat");

// Listen for mouse movements and move the cat image accordingly
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the cat to follow the cursor with an offset to center the cat on the mouse
    cat.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`;
});

// Optional: Make the message appear after scrolling down 500px
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const messageContainer = document.getElementById("message-container");

    // Show the message after scrolling 500px
    if (scrollPosition > 500) {
        messageContainer.style.opacity = "1";
        messageContainer.style.transition = "opacity 0.5s ease";
    }
});
