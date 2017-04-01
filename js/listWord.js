var words = getWords();

function createTd(text, parent) {
    var tdTableElt = document.createElement("td");
    tdTableElt.textContent = text;
    parent.appendChild(tdTableElt);
    return tdTableElt;
}

for (var i = 0;i < words.length;i++) {
    var trTableElt = document.createElement("tr");
    document.getElementById("bodyTable").appendChild(trTableElt);

    createTd(i + 1, trTableElt);
    createTd(words[i].english, trTableElt);
    createTd(words[i].french, trTableElt);

    var tdTableElt = createTd("", trTableElt);

    var deleteButtonElt = document.createElement("button");
    tdTableElt.appendChild(deleteButtonElt);

    var deleteImgElt = document.createElement("img");
    deleteImgElt.src = "../images/delete.png";
    deleteButtonElt.appendChild(deleteImgElt);
} 