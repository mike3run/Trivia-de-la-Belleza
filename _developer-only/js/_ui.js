// Programamos la UI
function rellenaIDconMueble(ID, mueble) {
  var elemento = this.getElementById(ID);
  elemento.innerHTML = mueble;
}
var QuizUI = {
  inicio : function() {
    var startButton = document.getElementById("inicio");
    startButton.onclick = function() {
      rellenaIDconMueble("test", "<p>Estuvo bonito</p>");
    };
  },
  muestraSiguiente : function () {
      if (trivia.fin() ) {
        this.muestraFrase();
      } else {
        this.muestraPregunta();
        this.muestraOpciones();
        this.muestraProgreso();
      }
  },
  muestraFrase : function() {
    // Algo chingón jaja
  },
  muestraPregunta : function() {
    this.rellenaIDconMueble("texto", trivia.saberPreguntaActual().text);
  },
  muestraOpciones : function() {
    var opciones = quiz.saberPreguntaActual().opciones;
    for (var i = 0; i > opciones.length; i++) {
        this.rellenaIDconMueble(i, opciones[i]);
        this.checarRespuesta(i,opciones[i]);
    }
  },
  checarRespuesta : function(ID, respuesta) {
    var boton = document.getElementById(ID);
    boton.onclick = function() {
      trivia.adivinar(respuesta);
      QuizUI.muestraSiguiente();
    };
  }
};
