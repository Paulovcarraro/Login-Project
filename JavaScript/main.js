// Script de animação do background da tela

VANTA.FOG({
  el: "#vanta-fog",
  mouseControls: true,
  touchControls: true,
  highlightColor: 0x007bff,
  midtoneColor: 0x111111,
  lowlightColor: 0x000000,
  baseColor: 0x000000,
  blurFactor: 0.3,
  speed: 1.5,
  zoom: 1.0
});

// Script de salvamento de dados e adição na tabela

const form = document.getElementById("formLogin");
const listaUsuarios = document.getElementById("listaUsuarios");
const usuarios = [];

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o envio tradicional

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Armazenar os dados (sem senha, por segurança)
  const usuario = {
    nome,
    email
  };

  usuarios.push(usuario);

  // Atualizar a lista na tela
  atualizarListaUsuarios();

  // Limpar os campos
  form.reset();
});

function atualizarListaUsuarios() {
    const tabela = document.querySelector("#tabelaUsuarios tbody");
    tabela.innerHTML = ""; // limpa o conteúdo anterior
  
    usuarios.forEach((user) => {
      const linha = document.createElement("tr");
  
      const colunaNome = document.createElement("td");
      colunaNome.textContent = user.nome;
  
      const colunaEmail = document.createElement("td");
      colunaEmail.textContent = user.email;
  
      linha.appendChild(colunaNome);
      linha.appendChild(colunaEmail);
  
      tabela.appendChild(linha);
    });
  }
  
