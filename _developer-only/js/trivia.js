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
