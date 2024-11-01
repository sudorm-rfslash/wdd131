const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzk2MTE2OTBlNzJjNjgxMjY5N2I3MDAxODcxYzExZSIsIm5iZiI6MTczMDQzMzg0Mi41MDQ0NjU2LCJzdWIiOiI2NGIwYjgwMzI1M2ZhYjAxMWIxZDYzNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kMfJRqH2BDu0CrZENaTHVaWoYw3TW6Z_M2_ddgHKM_Y'
  }
};

const movieCardsContainer = document.getElementById('movieCards');
const trendingLink = document.getElementById('trending');
const topLink = document.getElementById('top');
const tvLink = document.getElementById('tv');

function fetchMovies(url) {
  fetch(url, options)
    .then(response => response.json())
    .then(data => displayMovies(data.results.slice(0, 10))) // Limit to 10 movies
    .catch(error => console.error('Error fetching data:', error));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatVote(vote) {
  return Math.round(vote * 10) / 10;
}

function displayMovies(movies) {
  movieCardsContainer.innerHTML = ''; // Clear previous content
  movies.forEach(movie => {
    const mediaType = movie.media_type === 'tv' ? 'tv' : 'movie'; // Check media type
    const movieCard = document.createElement('figure');
    movieCard.innerHTML = `
      <a href="https://www.themoviedb.org/${mediaType}/${movie.id}" target="_blank">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title || movie.name}" loading="lazy">
      </a>
      <figcaption>
        <h3><a href="https://www.themoviedb.org/${mediaType}/${movie.id}" target="_blank">${movie.title || movie.name}</a></h3>
        <p>Release Date: ${formatDate(movie.release_date || movie.first_air_date)}</p>
        <p>Rating: ${movie.vote_average}</p>
      </figcaption>
    `;
    movieCardsContainer.appendChild(movieCard);
  });
}


// Fetch trending movies by default on page load
fetchMovies('https://api.themoviedb.org/3/trending/movie/day?language=en-US');

// Event listeners for links
trendingLink.addEventListener('click', () => {
  fetchMovies('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
});

topLink.addEventListener('click', () => {
  fetchMovies('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
});

tvLink.addEventListener('click', () => {
  fetchMovies('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
});
