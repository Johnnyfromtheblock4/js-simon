//recupero gli elementi del dom che mi servono
const numbersList = document.getElementById(`numbers-list`);

//genero i 5 numeri casuali
let numbersGenerated = [];

for (let i = 0; i < 6; i++) {
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
    numbersList.classList.add = "d-none";

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

//mostro le risposte

//document.getElementById("answers-form").classList.remove("d-none");
