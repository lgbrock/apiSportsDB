
//Next 15 Events by League Id - https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328

//select team - dropdown list or empty textbox
//get schedule - press button and schedule shows up below

//Example fetch using pokemonapi.co
document.querySelector('#getTeamSchedule').addEventListener('click', getSchedule)

function getSchedule() {
    let inputVal = document.querySelector('input').value
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328' + inputVal

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = data[0].question
            document.querySelector('h3').innerText = data[0].category.title
            answer = data[0].answer

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}
function showAnswer() {
    document.querySelector('h2').innerText = answer
}










document.querySelector('button').addEventListener('click', getTeamSchedule)

function getTeamSchedule() {
    let inputVal = document.querySelector('input').value
    const url = '' + inputVal

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let drinkName = data.drinks[0].strDrink
            let drinkThumb = data.drinks[0].strDrinkThumb
            let drinkInst = data.drinks[0].strInstructions
            document.querySelector('h2').innerText = drinkName
            document.querySelector('img').src = drinkThumb
            document.querySelector('h3').innerText = drinkInst
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
