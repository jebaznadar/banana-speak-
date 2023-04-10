var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click",clickeventhandler)
var txtinput = document.querySelector("#txt-input")
txtinput.addEventListener("click",clickeventhandler)
function clickeventhandler() {
    console.log("click");
    console.log("input" , txtinput.value)
}