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
