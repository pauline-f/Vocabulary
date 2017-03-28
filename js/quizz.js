var indice = 0;
var englishElt = document.getElementById("english");
var frenchElt = document.getElementById("french");
var messageElt = document.getElementById("message");
var buttonElt = document.getElementById("ok");
var listWords = getWords();

function nextWord(indice) {
    englishElt.textContent = listWords[indice].english;
};

buttonElt.addEventListener("click", function() {

    // Test and show message
    if (listWords[indice].french === frenchElt.value) {
        messageElt.textContent = "Bravo !!!";
    } else {
        messageElt.textContent = "The answer was:" + listWords[indice].french;
    }

    // Remove message after 2 seconds
    function supressionMessage() {
        messageElt.textContent = "";
        frenchElt.value="";
        indice++;
        nextWord(indice);

        clearInterval(intervalMessage);
    }
    var intervalMessage = setInterval(supressionMessage, 2000);
});

nextWord(indice);