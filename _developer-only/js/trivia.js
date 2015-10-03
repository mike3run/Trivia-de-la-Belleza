/* Muchas gracias por tomarte el tiempo de ver mi código fuente ^^
  Este pequeño proyecto de fin de semana nace de unas clases que he tomado en Treehouse.
  Si quieres aprender disfruta de 15 días cortesía de le-yo:
  http://referrals.trhou.se/miguelpalau
  - Miguel Palau 2015 yeh.
*/

// 1 Primero hagamos el equeleto de lo que es una pregunta y lo que debe de contener.
// @codekit-prepend "_pregunta-esqueleto.js";

// 2 Luego vamos a programar que pedo hace la trivia en si misma (detrás de cámaras)
// @codekit-prepend "_app.js";

// 3 Entooonces toca programar que show con el tema visual conforme vas avanzando
// @codekit-prepend "_ui.js";

// 4 Ahora ya viene lo bonito aka fácil pero bueno pero perro.
// Añadimos en si mismas las preguntas

var preguntas = [
  new Pregunta("¿Cuál es la pesadilla #25 de Bella Messi?", ["Zapato Mojado", "Tallar Carro", "Quebrar Diente", "Tronar Globo"], "Tallar Carro"),
  new Pregunta("¿Cómo bajaba Bella Messi las escaleras en su incidente del pie?", ["De reversa mami", "Agachadita", "De pompas", "Con belleza natural"], "De pompas"),
  new Pregunta("¿Cómo se lastimó su pie Bella Messi?", ["Pisotón Gordo", "Torcedura Épica", "En la guerra", "Maquillándose"], "Pisotón Gordo")
];

// Arrancamos Trivia
  var trivia = new Trivia(preguntas);

// Y que se vea bonito
QuizUI.inicio();
