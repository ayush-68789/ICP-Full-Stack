var currentPage = window.location.pathname.split('/').pop() || 'index.html';
var links = document.querySelectorAll('nav ul li a');
for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute('href') === currentPage) {
    links[i].style.textDecoration = 'underline';
  }
}

var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    form.reset();
    document.getElementById('form-success').style.display = 'block';
  });
}