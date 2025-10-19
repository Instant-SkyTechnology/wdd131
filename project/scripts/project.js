document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

    
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("mobileNav");

    hamburger.addEventListener("click", () => {
        // Toggle nav visibility
        const isOpen = nav.style.display === "block";
        nav.style.display = isOpen ? "none" : "block";

        // Toggle icon and class
        hamburger.classList.toggle("open");
        hamburger.textContent = isOpen ? "☰" : "❎";
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.getElementById("hamburger");
//     const nav = document.getElementById("mobileNav");

//     hamburger.addEventListener("click", () => {
//         nav.style.display = nav.style.display === "block" ? "none" : "block";
//     });
// });

// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("open");

//     if (hamburger.classList.contains("open")) {
//         hamburger.textContent = "❎";
//     } else {
//         hamburger.textContent = "≡"; // or "\u2261"
//     }
// });

