const rootElement = document.querySelector('#root')

rootElement.insertAdjacentHTML("beforeend", `
    <h1>Darts Score Counter</h1>
    <div class='container-score'>
        <input id='fScore' type='number'>
        <select id='chosenNumber'>
            <option>Choose number!</option>
            <option>301 / Short Match</option>
            <option>501 / Standard Match</option>
        </select>
        <input id='sScore' type='number'>
    </div>
    <div class='container-number'>
        <input id='fPlayer' type='number'>
        <input id='sPlayer' type='number'>
    </div>
`)

const firstScore = document.querySelector('#fScore')
const secondScore = document.querySelector('#sScore')
const chosenNumber = document.querySelector('#chosenNumber')

const firstPlayer = document.querySelector('#fPlayer')
const secondPlayer = document.querySelector('#sPlayer')

chosenNumber.addEventListener('change', (e) => {
    console.log(e.target.value)
    if(e.target.value) {
        firstScore.value = parseInt(e.target.value.substring(0,3))
        secondScore.value = parseInt(e.target.value.substring(0,3))
    } 
})