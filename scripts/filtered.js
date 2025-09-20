const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Kinshasa DRC",
        location: "Kinshasa, DR, Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/800x500/01-Kinshasa-DRCongo-Temple-2208932.jpg"
    },
    {
        templeName: "Johannesburg Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
        templeName: "Montreal Temple",
        location: "Longueuil, Quebec, Canada",
        dedicated: "2000, June, 04",
        area: 11550,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
    },
    {
        templeName: "Toronto Temple",
        location: "Toronto, Ontario, Canada",
        dedicated: "1990, August, 25-27",
        area: 55558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
    },
    {
        templeName: "Calgary Temple",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/800x500/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },
    // Add more temple objects here...
];

createTempleCard(temples);

// Button references
const home = document.querySelector(".active");
const old = document.querySelector("#O-ld");
const New = document.querySelector("#N-ew");
const large = document.querySelector("#L-arge");
const small = document.querySelector("#S-mall");


// Event listener for Old Temples
home.addEventListener("click", () => {
    createTempleCard(temples);
});

old.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 2000;
    });
    createTempleCard(oldTemples);
});

// Event listener for New Temples
New.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2000;
    });
    createTempleCard(newTemples);
});

// Event listener for Large Temples (≥ 50,000 sqft)
large.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area >= 50000);
    createTempleCard(largeTemples);
});

// Event listener for Small Temples (< 50,000 sqft)
small.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 50000);
    createTempleCard(smallTemples);
});


//CreateTempleCard function
function createTempleCard(filteredTemples) {
    const container = document.querySelector(".tmple"); 
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}


