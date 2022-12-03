var quizForm = document.querySelectorAll(".quiz-form")
var submitButton = document.querySelector("#submit-btn")
var result = document.querySelector("#result")

correctAnswers = ["90", "right angled", "one right angle", "3,4,5", "25°", "10°", "a+b+c", "0", "45°,45°"]




function Marks() {
    // let score = 0
    // let index = 0
    // const formResults = new FormData(quizForm)
    // for (let value of formResults.values()) {
    //     if (value === correctAnswers[index]) {
    //         score = score + 1
    //     }

    //     index = index + 1


    // }

    console.log("clicked")

    // result.textContent = "Your score is :" + score
}

submitButton.addEventListener("click", Marks)
