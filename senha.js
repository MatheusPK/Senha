var fazTabela = function() {
  var aSecreto = "<tr class = 'codigo'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>";
  $(".tabela").append(aSecreto);
  for (var i = 1; i <= 10; i++) {
      var aLivre = "<tr id='" + i +"'><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><td><div class='tentativa'></div></td><div class='tentativa'></div></td></tr>";
      $(".tabela").append(aLivre);
      $("tr:last").addClass("tentativa");
  }
}
var cores = ["red", "blue", "yellow", "purple", "green", "orange", "pink", "grey"]
var geraCodigo = function() {
  var senha = [];
  for (var i = 0; i <= 3; i++) {
    senha[i] = cores[Math.floor((Math.random() * 8) + 0)]
  }
  return senha;
}
