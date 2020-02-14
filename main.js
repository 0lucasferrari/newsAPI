/* Consulta uma API enviando o link
document.querySelector("#carregar-cep").onclick = function() {
  carregarCep(document.getElementById("input_cep").value);
};

function carregarCep(cep) {
  fetch("https://viacep.com.br/ws/" + cep + "/json")
    //THEN: Espera o fetch ser resolvido e
    //      executa a função passada por parametro
    .then(function(response) {
      response.json().then(function(data) {
        //Data: Resultado da consulta da API em Array
        console.log(data);
        document.querySelector("#conteudo").innerHTML = `
                      <p>Cep: ${data.cep}</p>
                      <p>Bairro: ${data.bairro}</p>
                      <p>Rua: ${data.logradouro}</p>
                  `;
      });
    })
    .catch(function(error) {
      alert("Deu erro aqui!");
    });
} */
let news = [];

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=br&" +
  "apiKey=6f0e5cb8b8ec4cdcace917abb23157e5";

function trazerNoticias() {
  var req = new Request(url);
  fetch(req).then(function(response) {
    response.json().then(function(data) {
      data.articles.forEach(function(article) {
        document.querySelector("#noticias").innerHTML += `
              <div class="card mt-2">
                <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
                  <p class="card-text">${article.description}</p>
                </div>
              </div>
              `;
      });
    });
  });
}

/*
    document.querySelector("#noticias").innerHTML += `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${news[0].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${news[0].author}</h6>
                <p class="card-text">${news[0].description}</p>
              </div>
            </div>
            `; */
