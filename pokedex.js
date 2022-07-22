let count = 1;

function render() {
  let container = document.querySelector("#pokemon");
  container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" />`;
}

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

prev.onclick = function () {
  if (count > 1) {
    count--;
    render();
  }
};
next.onclick = function () {
  if (count < 650) {
    count++;
    render();
  }
};
render();
