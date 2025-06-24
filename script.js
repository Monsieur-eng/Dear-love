const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heart = document.getElementById('heart');

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
  heart.classList.remove('animate-heart');
  void heart.offsetWidth; // Force reflow to restart animation
  heart.classList.add('animate-heart');
});