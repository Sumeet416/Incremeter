const increment = document.querySelector("#incre");
const decrement = document.querySelector("#decre")
const target = document.querySelector("#target");
const resetbtn = document.querySelector("#reset");
let counter = 0
increment.addEventListener("click", function(){
    counter++
    target.innerHTML = `${counter}`

})

decrement.addEventListener("click", function(){
    counter--
    if(counter < 0){
        counter = 0
    }
    target.innerHTML = `${counter}`

})

resetbtn.addEventListener("click", function(){
    counter = 0
    target.innerHTML = "--"
})