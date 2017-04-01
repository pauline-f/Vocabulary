var englishElt = document.getElementById("english");
var frenchElt = document.getElementById("french");
var messageElt = document.getElementById("message");
var buttonElt = document.getElementById("ok");

buttonElt.addEventListener("click", function() {
    var newWord = new Word(englishElt.value, frenchElt.value);
    messageElt.textContent = "You added a new word: " + englishElt.value + " - " + frenchElt.value;
    addWord(newWord);
});