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

var gameOver = "<h1>Game Over</h1>";
gameOver += "<div id='emoji' class=''></div>";
gameOver+="<p id='score'></p>";
gameOver+="<p id='mensaje'></p>";


var QuizUI = {
  start : function () {
    var startButton = document.getElementById("startButton");
    startButton.onclick = function() {
      canvas.innerHTML = startPoint;
      QuizUI.mostrarPregunta();
    };
  },
  mostrarPregunta : function() {
    if (trivia.noMasPreguntas() ) {
    // El final de todo
    canvas.innerHTML = gameOver;
    this.emojiControl();
    this.reemplazaIDporMueble("score", trivia.score + "/100");
    } else {
      this.reemplazaIDporMueble("numeroPreguntaActual", "0" + (trivia.numeroPreguntaActual + 1));
      this.reemplazaIDporMueble( "texto", trivia.saberPregunta().texto );
      this.emojiControl();
      this.reemplazaIDporMueble("score", trivia.score + "/100");
      var opciones = trivia.saberPregunta().opciones;
      for (var i = 0; i < opciones.length; i++) {
        this.reemplazaIDporMueble(i, opciones[i]);
        this.seleccionControl(i, opciones[i]);
      }
    }
  },
  reemplazaIDporMueble : function(id, mueble) {
    var elemento = document.getElementById(id);
    elemento.innerHTML = mueble;
  },
  cambiarEmoji : function (emojiQueCambiara) {
    var emoji = document.getElementById("emoji");
    var favicon = document.getElementById("favicon");
    emoji.className = emojiQueCambiara;
    favicon.setAttribute("href", "img/" + emojiQueCambiara +".png");
  },
  emojiControl : function () {
    if (trivia.score >= 0 && trivia.score < 10) {
      this.cambiarEmoji("poop");
      this.reemplazaIDporMueble("mensaje", "Esfuerzate más");
    } else if (trivia.score >= 10 && trivia.score < 20) {
      this.cambiarEmoji("desesperado");
      this.reemplazaIDporMueble("mensaje", "No traes nada");
    }else if (trivia.score >= 20 && trivia.score < 30) {
      this.cambiarEmoji("moco");
      this.reemplazaIDporMueble("mensaje", "Por favor…");
    }else if (trivia.score >= 30 && trivia.score < 40) {
      this.cambiarEmoji("decepcion");
      this.reemplazaIDporMueble("mensaje", "Me decepcionas");
    }else if (trivia.score >= 40 && trivia.score < 50) {
      this.cambiarEmoji("neutral");
      this.reemplazaIDporMueble("mensaje", "Meh");
    }else if (trivia.score >= 50 && trivia.score < 60) {
      this.cambiarEmoji("pxndx");
      this.reemplazaIDporMueble("mensaje", "Pxndx en general");
    }else if (trivia.score >= 60 && trivia.score < 70) {
      this.cambiarEmoji("happy");
      this.reemplazaIDporMueble("mensaje", "Te ves bien");
    }else if (trivia.score >= 70 && trivia.score < 80) {
      this.cambiarEmoji("grin");
      this.reemplazaIDporMueble("mensaje", "Eres muy bueno!");
    }else if (trivia.score >= 80) {
      this.cambiarEmoji("boss");
      this.reemplazaIDporMueble("mensaje", "¡Eres el amo del universo!");
    }
  },
  seleccionControl : function(id, seleccion) {
    var boton = document.getElementById(id);
    boton.onclick = function() {
        trivia.adivinar(seleccion);
        QuizUI.mostrarPregunta();
    };
  }
};
