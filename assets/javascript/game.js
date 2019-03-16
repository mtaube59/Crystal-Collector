
$(document).ready(function() {
var wins = 0
var losses = 0
var score = 0
var computerNumber = randomNumber

    $("#number").text(computerNumber)


var randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber)

var gemBlue = Math.floor(Math.random() * 12) + 1;
console.log(gemBlue);

var gemPurple = Math.floor(Math.random() * 12) + 1;
console.log(gemPurple);

var gemYellow = Math.floor(Math.random() * 12) + 1;
console.log(gemYellow);

var gemGreen = Math.floor(Math.random() * 12) + 1;
console.log(gemGreen);


// $("#gem-blue").on("click", function {
//  gemBlue + score
// })
// $("#gem-purple").on("click", function {

// }

// })
})