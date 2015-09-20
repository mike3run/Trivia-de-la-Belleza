// Definamos las variables (primero las de UI)
  var numero = $('#pregunta');
  var texto = $('#texto');
  var btn0 = $('#0');
  var btn1 = $('#1');
  var btn2 = $('#2');
  var btn3 = $('#3');
  var emoji = $('#emoji');
  var score = $("#score");
  var msg = $("#msg");

// Estático el pex
  numero.html("1");
  texto.html("¿Cuál es la pesadilla #25 de Bella Messi?");
  btn0.html("Zapato Mojado");
  btn1.html("Tallar Carro");
  btn2.html("Quebrar Diente");
  btn3.html("Tronar Globo");
  emoji.addClass("poop");
  score.html("20/100");
  msg.html("¡Hasta un manco podría contestar mejor que tú!");

// Vamos a definir una pregunta en general con sus elementos
  function Pregunta(texto, opciones, respuesta) {
    this.texto = texto;
    this.opciones = opciones;
    this.respuesta = respuesta;
  }

  Pregunta.prototype.esCorrecta = function (opciones) {
    return this.respuesta === opciones;
  };
// Vamos a hacer el equeleto de las preguntas

// Luego añadimos en si mismas las preguntas

// Ahora vamos a poner la situación que se encargue de ir sumando puntos
