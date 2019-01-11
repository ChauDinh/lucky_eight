const randomNum = () => {
 return Math.floor(Math.random() * 10);
}

const buttonElement = document.getElementById("button");
const numberElement = document.getElementById("number");
const winnerElement = document.getElementById("winner");

buttonElement.addEventListener("click", e => {
 const random = randomNum();
 number.textContent = random;

 random === 8 ? winnerElement.style.display = "initial" : winnerElement.style.display = "none";
});


