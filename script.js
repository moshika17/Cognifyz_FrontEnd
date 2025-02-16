document.addEventListener("DOMContentLoaded", function() {
    // Smooth fade-in effect
    document.querySelector("h1").style.transition = "opacity 1.5s ease-in-out";
    document.querySelector("h1").style.opacity = "1";

    // Hover animation for project cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.3)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
