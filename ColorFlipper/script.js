const colors = ["green", "red", "black", "blue"]

const btn = document.getElementById("btn");

//return first element with class="color"
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

console.error("lof")
