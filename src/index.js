const lower = document.getElementById("lower");
const add = document.getElementById("add");
let no = document.getElementById("number");

lower.addEventListener("click", decrement);
add.addEventListener("click", increment);

let number = 7;

function increment() {
  if (number === 50) return;
  console.log("Hello");
  console.log(number);
  number += 1;
}

function decrement() {
  if (number <= 0) return;
  number -= 1;
}

setInterval(() => {
  no.innerText = number;

  let colo = "";
  switch (number) {
    case 0:
      colo = "red";
      break;
    case 50:
      colo = "purple";
      break;
    default:
      colo = "green";
      break;
  }
  no.style.color = colo;
}, 100);
