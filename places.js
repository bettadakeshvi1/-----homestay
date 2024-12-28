// Show the scroll-to-top button when the user scrolls down
window.onscroll = function () {
    const scrollTopButton = document.querySelector(".scroll-top");
    if (window.scrollY > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
