document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
      // Get existing count, or default to 0
      let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

  // Increment the count
  reviewCount++;

  // Save back to localStorage
  localStorage.setItem("reviewCount", reviewCount);

});
