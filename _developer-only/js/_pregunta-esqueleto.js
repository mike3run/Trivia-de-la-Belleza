// Vamos a definir una pregunta en general con sus elementos
  function Pregunta(texto, opciones, respuesta) {
    this.texto = texto;
    this.opciones = opciones;
    this.respuesta = respuesta;
  }

// Esta madre es para ver si lo que elige el jugador es correcto
  Pregunta.prototype.esCorrecta = function (seleccion) {
    return this.respuesta === seleccion;
  };
