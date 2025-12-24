window.onload = function () {
    const cards = document.querySelectorAll(".course-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
};
function toggleText(card) {
    const detail = card.querySelector(".detail");
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
