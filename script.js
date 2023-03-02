let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // предотвратить перезагрузку страницы
  let name = document.querySelector('#name').value;
  let age = document.querySelector('#age').value;
  let city = document.querySelector('#city').value;
  sendDataToServer(name, age, city); // отправить данные на сервер
});