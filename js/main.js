
//Next 15 Events by League Id - https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328

//select team - dropdown list or empty textbox
//get schedule - press button and schedule shows up below


document.querySelector('#getTeamSchedule').addEventListener('click', getSchedule)

function getSchedule() {
    let inputVal = document.querySelector('input').value
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328' + inputVal

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = data[0].events.strHomeTeam
            document.querySelector('h3').innerText = data[0].events

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}
function showLeague() {
    document.querySelector('h2').innerText = showLeague
}



/*
$(function(){
    fetch("https://www.scorebat.com/video-api/v1/"
  ).then(res => res.json())
  .then(element => {
   let ul = document.querySelector('ul');
   for(let i = 0; i < element.length; i++){
     let len = (element[i].videos.length)
     for(let j=0; j<len; j++){
     //console.log(element[i].videos)
      let span = document.createElement('span')
        span = element[i].date + ". ." + element[i].title
      let title = element[i].videos[j].title
      let li = document.createElement('li')
        li.append(span + "   " + title)
      let someid = document.getElementById('someId');
        ul.append(li);

      li.addEventListener('click',function(e){
        document.documentElement.scrollTop = 0;
        let div1 =  element[i].videos[j].embed
        let someid = document.getElementById('someId')
        someid.innerHTML = div1;
      })
       //console.log(title);
     }
       }
  })
  .catch(err => {
      console.error(err);
  });
  })

  */

