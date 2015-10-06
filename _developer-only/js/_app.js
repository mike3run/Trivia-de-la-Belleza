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
