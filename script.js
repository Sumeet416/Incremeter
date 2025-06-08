const countbtn = document.querySelector("#count");
const target = document.querySelector("#target");
const resetbtn = document.querySelector("#reset");
let counter = 0
countbtn.addEventListener("click", function(){
    counter++
    target.innerHTML = `${counter}`

})

resetbtn.addEventListener("click", function(){
    counter = 0
    target.innerHTML = "--"
})