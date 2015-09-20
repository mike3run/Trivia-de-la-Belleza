// Definamos las variables (primero las de UI)
  var numero = document.getElementById('pregunta');
  var texto = document.getElementById('texto');
  var btn0 = document.getElementById('0');
  var btn1 = document.getElementById('1');
  var btn2 = document.getElementById('2');
  var btn3 = document.getElementById('3');
  var emoji = document.getElementById('emoji');
  var score = document.getElementById('score');
  var msg = document.getElementById("msg");

// Estático el pex
  numero.innerHTML = "1";
  texto.innerHTML = "¿Cuál es la pesadilla #25 de Bella Messi?";
  btn0.innerHTML = "Zapato Mojado";
  btn1.innerHTML = "Tallar Carro";
  btn2.innerHTML = "Quebrar Diente";
  btn3.innerHTML = "Tronar Globo";
  emoji.addclass("poop");
  score.innerHTML = "20/100";
  msg.innerHTML = "¡Hasta un manco podría contestar mejor que tú!";


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
