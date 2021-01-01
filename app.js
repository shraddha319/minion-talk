let inputText = document.querySelector(".text-input");
let btnTranslate = document.querySelector(".btn-translate");
let outputText = document.querySelector(".text-output");

let url = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
    alert('Something went wrong:'+error);
}



btnTranslate.addEventListener("click", function onClickHandler() {
    let userInput = inputText.value;
    let requestUrl = url + "?text=" + userInput;

    fetch(requestUrl)
    .then(res => res.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(errorHandler);
}); 