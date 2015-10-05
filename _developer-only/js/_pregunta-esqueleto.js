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
