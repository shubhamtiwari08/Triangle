var checkButton = document.querySelector("#check-btn")

var result = document.querySelector("#result")

var input = document.querySelectorAll(".inputfield")

checkButton.addEventListener("click", angleSum)

function angleSum() {
    var sum = Number(input[0].value) + Number(input[1].value) + Number(input[2].value)

    if (sum === 180) {
        return result.textContent = "Yes its a triangle"
    } else {
        return result.textContent = "it's not a triangle,all the angles should add up to 180"
    }
}


