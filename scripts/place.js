// Set footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values for now (can be updated dynamically later)
const temperature = 45; // in °F
const windSpeed = 20;   // in mph

// DOM elements
const windChillElementF = document.getElementById("windchill");

// ✅ One-line wind chill calculation function (Imperial formula)
function calculateWindChillF(tempF, speedMph) {
    return (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)).toFixed(1);
}

// ✅ Function to display wind chill in degree 
function displayWindChillF(temp, speed) {
    const canCalculate = temp <= 50 && speed > 3; // Imperial threshold

    windChillElementF.textContent = canCalculate ? `${calculateWindChillF(temp, speed)} °F` : "N/A";
}

// Call when page loads
displayWindChillF(temperature, windSpeed);


