function encrypt() {
    var textField = document.getElementById("main-text");
    var btnEncrypt = document.querySelector("#encrypt");

    btnEncrypt.addEventListener("click", function (event) {
        event.preventDefault();
        const encryptedText = encryptText(textField.value);

        var emptyField = document.querySelector(".no-message");
        emptyField.classList.add("d-none");

        var filledField = document.querySelector(".encrypted-text");
        filledField.classList.remove("d-none");

        var paragraph = document.querySelector(".encrypted-text p");

        var lowercase = encryptedText.toLowerCase();

        function hasSpecialCharacter(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        var withAccent = encryptedText;
        var withoutAccent = withAccent.normalize("NFD");

        if (encryptedText === lowercase && encryptedText === withoutAccent && !hasSpecialCharacter(encryptedText)) {
            paragraph.textContent = encryptedText;
        } else {
            paragraph.textContent = "Only lowercase letters without accents.";
        }
    });
}

encrypt();

function decrypt() {
    var textField = document.getElementById("main-text");
    var btnDecrypt = document.querySelector("#decrypt");

    btnDecrypt.addEventListener("click", function (event) {
        event.preventDefault();
        const decryptedText = decryptText(textField.value);

        var emptyField = document.querySelector(".no-message");
        emptyField.classList.add("d-none");

        var filledField = document.querySelector(".encrypted-text");
        filledField.classList.remove("d-none");

        var paragraph = document.querySelector(".encrypted-text p");

        var lowercase = decryptedText.toLowerCase();

        function hasSpecialCharacter(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        var withAccent = decryptedText;
        var withoutAccent = withAccent.normalize("NFD");

        if (decryptedText === lowercase && decryptedText === withoutAccent && !hasSpecialCharacter(decryptedText)) {
            paragraph.textContent = decryptedText;
        } else {
            paragraph.textContent = "Only lowercase letters without accents.";
        }
    });
}

decrypt();
