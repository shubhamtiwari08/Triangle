var base = document.querySelector("#base")
var height = document.querySelector("#height")
var findButton = document.querySelector("#find-btn")
var result = document.querySelector("#result")


findButton.addEventListener("click", area)



function area() {

    let baseValue = Number(base.value)
    let heightValue = Number(height.value)


    let area = ((baseValue * heightValue) / 2)

    result.textContent = area




}

