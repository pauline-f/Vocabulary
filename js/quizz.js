var indice = 0;
var englishElt = document.getElementById("english");
var frenchElt = document.getElementById("french");
var messageElt = document.getElementById("message");
var buttonElt = document.getElementById("ok");
var listWords = getWords();

function nextWord(indice) {
    englishElt.textContent = listWords[indice].english;
};

function validateAnswer() {
    // Test and show message
    if (listWords[indice].french.toLowerCase() === frenchElt.value.toLowerCase()) {
        messageElt.textContent = "Bravo !!!";
    } else {
        messageElt.textContent = "The answer was:" + listWords[indice].french;
    }

    // Remove message after 2 seconds
    function supressionMessage() {
        messageElt.textContent = "";
        frenchElt.value="";
        frenchElt.focus();
        indice++;
        nextWord(indice);

        clearInterval(intervalMessage);
    }
    var intervalMessage = setInterval(supressionMessage, 2000);
}

buttonElt.addEventListener("click", function() {
    validateAnswer();
});

frenchElt.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        validateAnswer();
    }
});

nextWord(indice);