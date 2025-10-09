document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("applyBtn").addEventListener("click", savePreference);
    loadPreference(); // Apply previously saved theme
});

// Seasonal styles and messages
const seasonalThemes = {
    fall: {
        main: {
            message: "🍂 Fall is cozy and colorful!",
            background: "#fef3e2",
            textColor: "#7c3f00"
        }
    },
    winter: {
        main: {
            message: "❄️ Winter is peaceful and bright!",
            background: "#e7f0fd",
            textColor: "#003366"
        }
    }
};

// Function to apply selected theme
function applyTheme(season) {
    const theme = seasonalThemes[season]?.main;
    if (!theme) return;

    const main = document.querySelector("main");
    const messageBox = document.getElementById("seasonalMessage");

    // Apply background and text color to <main>
    if (main) {
        main.style.backgroundColor = theme.background;
        main.style.color = theme.textColor;
    }

    // Update message
    if (messageBox) {
        messageBox.textContent = theme.message;
    }
}

// Save preference to localStorage
function savePreference() {
    const selected = document.getElementById("themeSelector").value;

    if (selected === "") {
        alert("Please select a season first.");
        return;
    }

    localStorage.setItem("preferredSeason", selected);
    applyTheme(selected);
}

// Load preference on page load
function loadPreference() {
    const savedSeason = localStorage.getItem("preferredSeason");

    if (savedSeason) {
        document.getElementById("themeSelector").value = savedSeason;
        applyTheme(savedSeason);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("mobileNav");

    hamburger.addEventListener("click", () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
});