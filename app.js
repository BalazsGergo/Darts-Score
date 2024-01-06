const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML(
  "beforeend",
  `
    <h1>Darts Score Counter</h1>
    <div class='container-score'>
        <label>First Player's Score:
        <input id='fScore' type='number'>
        </label>
        <select id='chosenNumber'>
            <option>Choose a match type!</option>
            <option>301 / Short Match</option>
            <option>501 / Standard Match</option>
        </select>
        <label>Second Player's Score:
        <input id='sScore' type='number'>
        </label>
    </div>
    <div class='container-number'>
    <label>First Player :
        <input id='fPlayer' type='number'>
    </label>
    <label>Second Player :
        <input id='sPlayer' type='number'>
    </label>
    </div>
`
);

const firstScore = document.querySelector("#fScore");
const secondScore = document.querySelector("#sScore");
const chosenNumber = document.querySelector("#chosenNumber");

const firstPlayer = document.querySelector("#fPlayer");
const secondPlayer = document.querySelector("#sPlayer");

chosenNumber.addEventListener("change", (e) => {
  e.target.value
    ? (firstScore.value = parseInt(e.target.value.substring(0, 3)))
    : null;
  e.target.value
    ? (secondScore.value = parseInt(e.target.value.substring(0, 3)))
    : null;
});

let score = 0;

firstPlayer.addEventListener("change", (e) => {
  let number = e.target.value;

  if (firstPlayer.value > 180) {
    return alert("Tul magas szam");
  }
  if (firstScore) {
    firstScore.value = firstScore.value - number;
  }
});

secondPlayer.addEventListener("change", (e) => {
  let number = e.target.value;

  if (secondPlayer.value > 180) {
    return alert("Tul magas szam");
  }
  if (secondScore) {
    secondScore.value = secondScore.value - number;
  }
});
