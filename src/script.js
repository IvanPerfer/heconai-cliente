
// Simulando chamada à API protegida
fetch("https://api.heconai.com.br/painel", {
  headers: {
    Authorization: "Bearer I_HECON_82fC7D9xWqKzP@3Mgl9VvYqTEZ4XasJ"
  }
})
.then(response => response.json())
.then(data => {
  const leadList = document.getElementById("lead-list");
  if (data && data.dados) {
    leadList.innerHTML = "<ul>" + data.dados.map(lead => "<li>" + lead + "</li>").join("") + "</ul>";
  } else {
    leadList.textContent = "Nenhum lead encontrado.";
  }
});

document.getElementById("export-btn").onclick = () => {
  alert("Exportar em breve...");
};
