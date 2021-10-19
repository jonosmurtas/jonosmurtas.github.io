let countEl = document.getElementById("count-el")
let peopleEntered= 0
let saveEl = document.getElementById("save-el")
 
function increment(){
 
 peopleEntered += 1
 countEl.innerText = peopleEntered
 console.log(peopleEntered)
}
increment()

function save() {
    console.log(peopleEntered)
    let saves = " " + "-" + " " +peopleEntered 
    saveEl.innerText += saves
    countEl.innerText = 0
    peopleEntered= 0
     
}



save()
