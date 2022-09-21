const ask = () => {
    //Leer Pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
        //Recibir respuesta al preguntar a bola mágina
        let answer = magicBall();
        //Imprimir Resultado
        answerInput.value = answer;
    } else {
        answerInput.value = "Pregunta algo!!";
    }
};

//Función Bola Mágica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber) {
        case 1:
            eightBall = "Sabor Fresa, Por payas@";
          break;
        case 2:
            eightBall ="Zapote, Eres negro";
          break;
        case 3:
            eightBall ="Limon, Eres mamon";
          break;
        case 4:
            eightBall ="Guayaba, Caes mal";
          break;
        case 5:
            eightBall ="Uva, por Chaparr@";
          break;
        case 6:
            eightBall ="Mango, Por resbalos@";
          break;
        case 7:
            eightBall ="Kiwi, Nadie te conoce";
          break;
        case 8:
            eightBall ="Guanabana, Eres especial";
          break;
    }
    return eightBall;
};