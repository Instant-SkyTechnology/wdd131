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


document.addEventListener("DOMContentLoaded", () => {
    // Get existing count, or default to 0
    let submitCount = parseInt(localStorage.getItem("submitCount")) || 0;

    // Increment the count
    submitCount++;

    // Save back to localStorage
    localStorage.setItem("submitCount", submitCount);

});

