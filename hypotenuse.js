let height = document.querySelector("#height")
let base = document.querySelector("#base")
let hypotenuse = document.querySelector("#hypotenuse")
let submitButton = document.querySelector("#submit-btn")






function find() {
    let heightValue = Number(height.value) * Number(height.value)
    let baseValue = Number(base.value) * Number(base.value)

    let hypotenuseValue = Math.sqrt(heightValue + baseValue)

    hypotenuse.textContent = "hypotenuse is : " + hypotenuseValue


}


submitButton.addEventListener("click", find)