// Vamos a hacer el esqueleto de la trivia
    function Trivia(preguntas) {
      this.score = 0;
      this.preguntas = preguntas;
      this.indexActual = 0;
      this.scoreIncrementar = this.preguntas / 100;
    }

    Trivia.prototype.adivinar = function (seleccion) {
      if (this.saberPreguntaActual().esCorrecta(seleccion)) {
        this.score +=this.scoreIncrementar;
      }
      this.indexActual++;
    };

    Trivia.prototype.saberPreguntaActual = function () {
      return this.preguntas[this.indexActual];
    };

    Trivia.prototype.fin = function(){
      return this.indexActual >= this.preguntas.length;
    };
