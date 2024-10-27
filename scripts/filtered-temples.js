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
    templeName: "Fukuoka Japan",
    location: "Fukuoka, Japan",
    dedicated: "2000, June, 11",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl:
      "https://newsroom.churchofjesuschrist.org/media/640x480/Tokyo-Japan-Temple3.jpg"
  },
];

window.onload = function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;
  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;

  const templeCards = document.getElementById('templeCards');

  const displayTemples = (templesToDisplay) => {
    templeCards.innerHTML = '';
    templesToDisplay.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';
      card.innerHTML = `
        <div class="info">
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> <span>${temple.location}</span></p>
          <p><strong>Dedicated:</strong> <span>${temple.dedicated}</span></p>
          <p><strong>Size:</strong> <span>${temple.area}</span> sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">
      `;
      templeCards.appendChild(card);
    });
  };


  displayTemples(temples);


  const getYearFromDedicated = (dedicated) => {
    const yearMatch = dedicated.match(/(\d{4})/);
    return yearMatch ? parseInt(yearMatch[1]) : null;
  };

  document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples);
  });

  document.getElementById('old').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900);
    displayTemples(filteredTemples);
  });

  document.getElementById('new').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) > 2000);
    displayTemples(filteredTemples);
  });

  document.getElementById('large').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(filteredTemples);
  });

  document.getElementById('small').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(filteredTemples);
  });
};



document.getElementById('toggleButton').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
  if (this.textContent === '☰') {
    this.textContent = 'X';
  } else {
    this.textContent = '☰';
  }
});


function updateFooter() {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;
  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;
}