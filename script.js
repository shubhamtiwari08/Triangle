var checkButton = document.querySelector("#check-btn")

var input = document.querySelectorAll(".inputfield")

checkButton.addEventListener("click", angleSum)

function angleSum() {
    var sum = Number(input[0].value) + Number(input[1].value) + Number(input[2].value)
    console.log(sum)

    if (sum === 180) {
        console.log("Yes its a triangle")
    } else {
        console.log("it's not a triangle,all the angles should add up to 180")
    }
}


