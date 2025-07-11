//recupero gli elementi del dom che mi servono
const numbersList = document.getElementById(`numbers-list`);

//genero i 5 numeri casuali
let numbersGenerated = [];

for (let i = 0; i < 5; i++) {
  let randomNumber = parseInt(Math.random() * 50) + 1;
  numbersGenerated.push(randomNumber);
  numbersList.innerHTML += `<li>${randomNumber}</li>`;
}

//recupero l'elemento nel dom per mostrare il countdown
const countdown = document.getElementById(`countdown`);
const answerForm = document.getElementById(`answer-form`);

//definisco una variabile che mi conta i secondi
let seconds = 10;

//definisco il mio intervallo
const interval = setInterval(() => {
  //controllo se i secondi sono = a 0
  if (seconds < 0) {
    //cancello l'intervallo
    clearInterval(interval);

    //faccio sparire i numeri
    numbersList.classList.add("d-none");

    //faccio apparire i numeri da inserire
    answerForm.innerText = document
      .getElementById("answers-form")
      .classList.remove("d-none");
  } else {
    countdown.innerText = seconds;
  }
  //decremento della variabile seconds
  seconds--;
}, 1000);

//controllo le risposte al click
const button = document.querySelector("#answers-form button"); //bottone
const numbersAnswer = document.querySelectorAll(
  '#answers-form input[type="number"]'
); //risposte
const message = document.getElementById(`message`); //messaggio

// Aggiungo l'event listener al bottone
button.addEventListener("click", function (event) {
  // Prevengo il refresh della pagina
  event.preventDefault();

  // Converto i valori inseriti in numeri
  const userAnswers = [];
  for (let i = 0; i < numbersAnswer.length; i++) {
    userAnswers.push(parseInt(numbersAnswer[i].value));
  }

});
