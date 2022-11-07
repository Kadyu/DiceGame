
document.addEventListener('keydown', function() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage ="images/" + "dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage ="images/" + "dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage)

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "PLayer 1 wins";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "PLayer 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }

});