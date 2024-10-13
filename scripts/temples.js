document.getElementById('toggleButton').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
  if (this.textContent === '☰') {
    this.textContent = 'X';
  } else {
    this.textContent = '☰';
  }
});
