function getWords() { 
    var listWords  = [
        new Word("hello", "bonjour"),
        new Word("welcome", "bienvenue"),
        new Word("sun", "soleil")
    ];
    return listWords;
}

function Word(english, french) {
  this.english = english;
  this.french = french;
}

function addWord(word) {
    console.log("TODO add " + word.french + ", " + word.english);
}

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this);
//     }
// };

// xhttp.open("GET", "https://vocabulary-f982.restdb.io/rest/word?x-apikey=465c2b38908b5202b91f95ec11305ab295157", true);
// xhttp.setRequestHeader("x-apikey", "58d9758e9b7aa194660910bb");
// xhttp.send();
