document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const navigation = document.querySelector('.main-nav');
  if (!button || !navigation) return;
  button.addEventListener('click', () => navigation.classList.toggle('open'));
});
