var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output")
var txtInput = document.querySelector("#txt-input")
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
 function getTranslationURL(textInput)
 {
    return serverURL + "?" + "text=" + textInput ;
}
function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time.")
}
function clickeventhandler() {
    // outputDiv.innerText = `jaajajajajajajajajaja${txtInput.value}`

           var inputText = txtInput.value;

    fetch ( getTranslationURL(inputText)) 
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerHTML = translatedText ;
        } )
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickeventhandler)

