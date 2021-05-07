const input = document.querySelector('input');
const form = document.querySelector('form').addEventListener('submit', function (e) {
  const popup = document.createElement('h1');
  popup.className = 'popup';
  popup.appendChild(document.createTextNode('Thank you for signing up!'));
  document.body.appendChild(popup);
  input.value = '';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
  e.preventDefault();
});
