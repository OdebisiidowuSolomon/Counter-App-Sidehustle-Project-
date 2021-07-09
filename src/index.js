const lower = document.getElementById("lower");
const add = document.getElementById("add");
let no = document.getElementById("number");

lower.addEventListener("click", decrement);
add.addEventListener("click", increment);

let number = 7;

function increment() {
  if (number === 50) return;
  number += 1;
}

function decrement() {
  if (number <= 0) return;
  number -= 1;
}

setInterval(() => {
  no.innerText = number;

  let color = "";
  switch (number) {
    case 0:
      color = "red";
      break;
    case 50:
      color = "purple";
      break;
    default:
      color = "green";
      break;
  }
  no.style.color = color;
}, 100);
