function copyText() {
    let copiedText = document.querySelector(".encrypted-text p");
var btnCopy = document.querySelector("#copy");
btnCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(copiedText.innerText);
    alert("Text copied");
    location.reload();
    })
}

