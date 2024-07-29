var encryptedList = ["enter", "imes", "ai", "ober", "ufat"];
var normalList = ["e", "i", "a", "o", "u"];

const encryptionsForEncrypting = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const encryptionsForDecrypting = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function encryptText(text) {
    let convertedText = text;
    normalList.forEach(function (letter) {
        convertedText = convertedText.replaceAll(letter, encryptionsForEncrypting[letter]);
    });
    return convertedText;
}

function decryptText(text) {
    let textToConvert = text;
    encryptedList.forEach(function (letter) {
        textToConvert = textToConvert.replaceAll(letter, encryptionsForDecrypting[letter]);
    });
    return textToConvert;
}

