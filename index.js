let counter = document.getElementById("myCount")
let count = 0

function increment(){
    if (count >= 0)
    count++;
    myCount.innerText = count
}

var saveEl = document.getElementById("save-el")
function save() {
    var dash = count + " - "
    saveEl.innerText += dash
    console.log(count); 
    myCount.textContent = 0
    count = 0
}


