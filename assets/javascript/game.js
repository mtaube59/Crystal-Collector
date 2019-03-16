
$(document).ready(function () {

    var wins = 0
    var losses = 0
    var score = 0
    
    
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var computerNumber = getRndInteger(19, 120)

    $("#random").text(computerNumber)

    var gemBlue = Math.floor(Math.random() * 12) + 1;
    console.log(gemBlue);

    var gemPurple = Math.floor(Math.random() * 12) + 1;
    console.log(gemPurple);

    var gemYellow = Math.floor(Math.random() * 12) + 1;
    console.log(gemYellow);

    var gemGreen = Math.floor(Math.random() * 12) + 1;
    console.log(gemGreen);


    $("#blue").on("click", function () {
    //Grab value of blue and add to the variable score, update score on page
        score = gemBlue + score
        $("#score").text(score)
        updateScore(score)
        checkWins()

    })
    $("#green").on("click", function () {
        score = gemGreen + score
        $("#score").text(score)
        updateScore(score)
        checkWins()

    })
    $("#purple").on("click", function () {
        score = gemPurple + score
        $("#score").text(score)
        updateScore(score)
        checkWins()

    })
    $("#yellow").on("click", function () {
        score = gemYellow + score
        $("#score").text(score)
        updateScore(score)
        checkWins()

    })

    function updateScore(x) {
        $("#score").text(x)

    }
    function checkWins(tally) {
        if (score === computerNumber) {
            wins ++;
            $("#wins").text("Wins: " + wins)
            reset()
        }
        else if (score > computerNumber) {
            losses ++;
            $("#losses").text("Losses: " + losses)
            reset()
        }
    }
    function reset() {
        score = 0
        computerNumber = getRndInteger(19, 120);
        $("#random").text(computerNumber);
        $("#score").text(score);
        gemBlue = Math.floor(Math.random() * 12) + 1;
        gemPurple = Math.floor(Math.random() * 12) + 1;
        gemYellow = Math.floor(Math.random() * 12) + 1;
        gemGreen = Math.floor(Math.random() * 12) + 1;
    
    }
  
})