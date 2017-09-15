var fazTabela = function() {
  var aSecreto = "<tr class = 'codigo'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>";
  $(".tabela").append(aSecreto);
  for (var i = 10; i >= 1; i--) {
      var aLivre = "<tr id='" + i +"' class = 'tentativa'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><div></div></td><td id = 'dica' class = '" + i + "'><div></div><div></div><div></div><div></div></tr>";
      $(".tabela").append(aLivre);
  }
  var selecao = "<tr class = 'selecao'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>";
  $(".tabelaS").append(selecao);
}

var geraCodigo = function(cores) {
  var codigo = [];
  for (var i = 0; i <= 3; i++) {
    codigo[i] = cores[Math.floor((Math.random() * 8))];
  }
  return codigo;
}

var marcarCores = function(local, codigo) {
    codigo.forEach(function(cor, indice){
      $(local).eq(indice).css("background", cor);
    })
}

var compara = function(codigo, tentativa) {
  var dicas = [];
  for (var i in tentativa) {
    if (codigo.indexOf(tentativa[i]) == -1) dicas.push('rgb(100, 149, 237)');
    else if (tentativa[i] == codigo[i]) dicas.push('rgb(0, 0, 0)');
    else dicas.push('rgb(255, 255, 255)');
  }
  return dicas;
}

var confirma = function(){
  contador++;
  var tela = [];
  for(var i = 0; i <= 3;i++){
    tela.push($('.selecao div').eq(i).css("background-color"));
  }
  marcarCores("#" + contador + " td div", tela);
  marcarCores("." + contador + " div", compara(senha, tela));
}

var mudaCor = function(){
  var cores = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(128, 0, 128)", "rgb(0, 255, 0)", "rgb(255, 165, 0)", "rgb(255, 192, 203)", "rgb(128, 128, 128)"];
  $(this).css("background", cores[contadorCores]);
  contadorCores++;
  if (contadorCores > 8) {
    contadorCores = 0;
  }
}

var contador = 0;
var contadorCores = 0;
var cores = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(128, 0, 128)", "rgb(0, 255, 0)", "rgb(255, 165, 0)", "rgb(255, 192, 203)", "rgb(128, 128, 128)"];
var senha = geraCodigo(cores);

$(document).ready(function() {
  fazTabela();
  //marcarCores(".codigo td div", senha);
  $(".selecao div").click(mudaCor);
  $("button").click(confirma);
})
