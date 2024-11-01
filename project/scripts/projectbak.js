const movies = []; //movie array created from API data

window.onload = function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;
  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;

  const movieCards = document.getElementById('movieCards');

  const displayMovies = (moviesToDisplay) => {
    moviesCards.innerHTML = '';
    moviesToDisplay.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
      <div class="container">
        <img src="LINKFROMAPI" alt="Movie Poster" class="image" style="width:100%">
        <div class="middle">
          <div class="text">MOVIE NAME FROM API</div>
        </div>
      </div>
      `;
      movieCards.appendChild(card);
    });
  };


  displayMovies(movies);


  const getYearFromDedicated = (dedicated) => {
    const yearMatch = dedicated.match(/(\d{4})/);
    return yearMatch ? parseInt(yearMatch[1]) : null;
  };

  document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault();
    displayMovies(movies);
  });

  document.getElementById('old').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredMovies = movies.filter(movie => getYearFromDedicated(movie.dedicated) < 1900);
    displayMovies(filteredMovies);
  });

  document.getElementById('new').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredMovies = movies.filter(movie => getYearFromDedicated(movie.dedicated) > 2000);
    displayMovies(filteredMovies);
  });

  document.getElementById('large').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredMovies = movies.filter(movie => movie.area > 90000);
    displayMovies(filteredMovies);
  });

  document.getElementById('small').addEventListener('click', (event) => {
    event.preventDefault();
    const filteredMovies = movies.filter(movie => movie.area < 10000);
    displayMovies(filteredMovies);
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