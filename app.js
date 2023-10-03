const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


let b_c = document.querySelector(".color")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function() {
    let number = getRondomnum();
    b_c.innerHTML = colors[number];
    document.body.style.backgroundColor = colors[number];
})
  function getRondomnum() {
    return Math.floor(Math.random() * colors.length)
}
