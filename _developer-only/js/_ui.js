var canvas = document.getElementById("trivia");
var startPoint = "<h1>Trivia</h1>";
startPoint+= "<h2 id='numeroPreguntaActual'></h2>";
startPoint+="<p id='texto'></p>";
startPoint+="<button id='0'></button>";
startPoint+="<button id='1'></button>";
startPoint+="<button id='2'></button>";
startPoint+="<button id='3'></button>";
startPoint+="<div id='emoji' class=''></div>";
startPoint+="<p id='score'></p>";
startPoint+="<p id='mensaje'></p>";


var QuizUI = {
  start : function () {
    var startButton = document.getElementById("startButton");
    startButton.onclick = function() {
      canvas.innerHTML = startPoint;
      QuizUI.mostrarPregunta();
    };
  },
  mostrarPregunta : function() {
    this.reemplazaIDporMueble("numeroPreguntaActual", trivia.numeroPreguntaActual + 1);
    this.reemplazaIDporMueble( "texto", trivia.saberPregunta().texto );
    var opciones = trivia.saberPregunta().opciones;
    for (var i = 0; i < opciones.length; i++) {
      this.reemplazaIDporMueble(i, opciones[i]);
    }
  },
  reemplazaIDporMueble : function(id, mueble) {
    var elemento = document.getElementById(id);
    elemento.innerHTML = mueble;
  },
  cambiarEmoji : function (emojiQueCambiara) {
    var emoji = document.getElementById("emoji");
    emoji.className = emojiQueCambiara;
  },
  emojiControl : function () {
    // Algo aún no definido
  }
};
