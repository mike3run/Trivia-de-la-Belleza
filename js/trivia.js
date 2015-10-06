// Primero creamos el esqueleto básico de lo que viene siendo una pregunta
function Pregunta (texto, opciones, respuesta) {
  this.texto =      texto;
  this.opciones =   opciones;
  this.respuesta =  respuesta;
}

// Ahora vamos a crear una mini-función que corra para decirnos si la pregunta fue contestada correctamente o no. Devuelve true/false
Pregunta.prototype.esCorrecta = function (seleccion) {
  return this.respuesta === seleccion;
};


// Primero vamos a definir lo que hace a una trivia ser una trivia
function Trivia (preguntas) {
  this.score                  = 0;
  this.numeroPreguntaActual   = 0;
  this.preguntas              = preguntas;
  this.incrementoScore        = Math.floor(100/preguntas.length);
}

// Ahora vamos a hacer una serie de funciones para ir pensando que pasa cuando pase :)
// Saber que pregunta toca. Entramos a las preguntas y al accesar
Trivia.prototype.saberPregunta = function() {
  return this.preguntas[this.numeroPreguntaActual];
};

// Vamos a aumentar nuestro score si atinamos o nada si no y subimos el indice actual.
Trivia.prototype.adivinar = function(seleccion) {
  if(this.saberPregunta().esCorrecta(seleccion) ) {
    this.score+= this.incrementoScore;
  }
  this.numeroPreguntaActual++;
};

// Y ahora una función para revisar si ya se acabaron las preguntas mu.
// Basicamente es un verdadero/falso de si ya se acabó para usarlo en otro lado
Trivia.prototype.noMasPreguntas = function() {
  return this.numeroPreguntaActual >= this.preguntas.length;
};


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


// Empezamos con los básicos del ahorro
// @codekit-prepend "_pregunta-esqueleto.js";
// @codekit-prepend "_app.js";
// @codekit-prepend "_ui.js";


// Creamos nuevas preguntas
var preguntas = [
  new Pregunta("¿Cuál es la pesadilla #25 de Bella Messi?",[ "Zapato Mojado", "Tallar Carro", "Quebrar Diente", "Tronar Globo" ],"Tronar Globo"),
  new Pregunta("¿Cómo bajó de manera hermosa los escalones Bella Messi?", [ "Saltando", "Gateando", "De sentones", "De reversa" ], "De sentones"),
  new Pregunta("¿Cuál es la película Disney favorita de Bella Messi?", [ "Mulán", "Alicia", "Cenicienta", "Hercules" ], "Alicia"),
  new Pregunta("¿Cada cuanto se baña Bella Messi?", [ "Diario", "2 días", "3 días", "Nunca" ], "3 días"),
  new Pregunta("¿Qué carrera está estudiando Luis?", ["Computación", "Administración", "Las Vegas", "LIN Facilín"], "Computación"),
  new Pregunta("¿En dónde vive Pili?", ["Veracruz", "L.A.", "Puebla", "Oaxaca"], "Oaxaca"),
  new Pregunta("¿Cuál es el nombre real del Gordo?", ["Gordo", "Chochini", "Odín", "Mixwalter"], "Odín"),
  new Pregunta("¿Dónde hizo su maestría Lupita?", ["Tec de Mty", "UDLAP", "UPAEP", "Harvard"], "Tec de Mty"),
  new Pregunta("¿Cómo calientan los Nahuales?", ["Trotanto", "Estirando", "Platicando", "Crema Vaca"], "Crema Vaca"),
  new Pregunta("Gobernante preferido de Claudia", ["Tony Gali", "AMLOVE", "Moreno Valle", "EPN"], "Moreno Valle")
];
// Creamos nueva trivia
var trivia = new Trivia(preguntas);

// Arrancamos el tema visual
QuizUI.start();


