var Status = document.querySelector("h3")
var add = document.querySelector("#Add")
var remove = document.querySelector("#rem")
add.addEventListener("click", function() {
    Status.innerHTML = "Friends"
    Status.style.color = "green"
})
remove.addEventListener("click", function() {
    Status.innerHTML = "Stranger"
    Status.style.color = "brown"

})