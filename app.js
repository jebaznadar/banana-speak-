var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output")
var txtInput = document.querySelector("#txt-input")
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

 function getTranslationURL(text)
 {
    return serverURL + "?" + "text=" + text
}

function clickeventhandler() {
    // outputDiv.innerText = `jaajajajajajajajajaja${txtInput.value}`

           var inputText = txtInput;

    fetch ( getTranslationURL(inputText)) 
        .then(Response => Response.json())
        .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clickeventhandler)

