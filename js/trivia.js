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
  this.incrementoScore        = 100/preguntas.length;
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


// Empezamos con los básicos del ahorro
// @codekit-prepend "_pregunta-esqueleto.js";
// @codekit-prepend "_app.js";
// @codekit-prepend "_ui.js";


// Creamos nuevas preguntas
var preguntas = [
  new Pregunta("¿Cuál es la pesadilla #25 de Bella Messi?",[ "Zapato Mojado", "Tallar Carro", "Quebrar Diente", "Tronar Globo" ],"Tronar Globo"),
  new Pregunta("¿Cómo bajó de manera hermosa los escalones Bella Messi?", [ "Saltando", "Gateando", "De sentones", "De reversa" ], "De sentones"),
  new Pregunta("¿Cuál es la película Disney favorita de Bella Messi?", [ "Mulán", "Alicia", "Cenicienta", "Hercules" ], "Alicia")
];
// Creamos nueva trivia
var trivia = new Trivia(preguntas);

// Arrancamos el tema visual
QuizUI.start();


