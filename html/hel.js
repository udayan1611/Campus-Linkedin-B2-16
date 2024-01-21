function submitDoubt() {
    var questionInput = document.getElementById('question-input').value;
    var answerContainer = document.getElementById('answer-container');

    // Simulate processing (you can replace this with actual backend processing)
    setTimeout(function () {
        var answer = "This is a sample answer. Replace it with your logic.";
        answerContainer.innerHTML = "<p>" + answer + "</p>";
    }, 1000);
}
