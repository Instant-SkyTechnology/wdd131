document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("mobileNav");

    hamburger.addEventListener("click", () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
});


