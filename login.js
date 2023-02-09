const form = document.querySelector('#login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const pass = document.getElementById('pass').value;
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: pass,
    }),
  });

  const data = await response.json();
  if (data.success) {
    window.location.href = 'index.html';
    localStorage.setItem('loggedIn', true);
  } else {
    alert(
      'Usuário ou senha incorretos, verifique seus dados e tente novamente.'
    );
  }
});