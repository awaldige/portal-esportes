// script.js
ffunction enviarFormulario(event) {
  event.preventDefault();
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = 'Mensagem enviada com sucesso!';
  mensagem.style.color = 'green';

  // Limpa os campos do formulário
  event.target.reset();
}
unction enviarFormulario(event) {
  event.preventDefault();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Mensagem enviada com sucesso!";
  mensagem.style.color = "green";
}
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: #f9f9f9;
  color: #333;
}

header {
  background: #222;
  color: white;
  padding: 1rem 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.logo {
  width: 60px;
  border-radius: 50%;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.section {
  padding: 2rem 0;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  padding: 1rem;
  margin-bottom: 2rem;
}

.galeria {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.galeria img {
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

footer {
  background: #222;
  color: white;
  padding: 2rem 0;
  text-align: center;
}


  