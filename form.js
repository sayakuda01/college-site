document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#request-form');
  const result = document.querySelector('#form-result');
  if (!form || !result) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.textContent = 'Заявка принята. Специалист свяжется с вами.';
    form.reset();
  });
});
