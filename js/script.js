//recupero gli elementi del dom che mi servono
const numbersList = document.getElementById(`numbers-list`);

//genero i 5 numeri casuali
let numbersGenerated = [];

for (let i = 0; i < 6; i++) {
  let randomNumber = parseInt(Math.random() * 50) + 1;
  numbersGenerated.push(randomNumber);
  numbersList.innerHTML += `<li>${randomNumber}</li>`;
}
console.log(numbersGenerated);

//mostro le risposte

//document.getElementById("answers-form").classList.remove("d-none");



