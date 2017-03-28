var Word = {
    init: function (french, english) {
        this.french = french;
        this.english = english;
    },
};

var indice = 0;
nextWord(indice);
indice++;

function nextWord(indice) {
    var frenchElt = document.getElementById("french");
    frenchElt.textContent = listWords[indice].french;

    var englishElt = document.getElementById("english");
    englishElt.textContent = listWords[indice].english;
};

/*
function writeVocabularyData(id, french, english) {
      firebase.database().ref('vocabulary/' + id).set({
        french: french,
        english: english
      });
}
*/

var nextElt = document.getElementById("next");
nextElt.addEventListener("click", function() {
    //writeVocabularyData(1, "maison", "house");
    nextWord(indice);
    indice++;

    if (indice === listWords.length) {
        indice = 0;
    }
});
