const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];




let b_c = document.querySelector(".color")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    let hexColor ="#"
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRondomnum()];
    }
    b_c.innerHTML = hexColor ;
    document.body.style.backgroundColor = hexColor;
})
function getRondomnum() {
    return Math.floor(Math.random() * hex.length)
}
