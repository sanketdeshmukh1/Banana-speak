var submitbutton=document.querySelector("#submit-button")
var txtarea=document.querySelector("#txt-area")
var txtoutput=document.querySelector("#txt-output")
var serverurl="https://api.funtranslations.com/translate/minion.json"

function translatedurl(text){
    return serverurl + "?" + "text="+ text;
}

function onclicked(){
    var text1=txtarea.value;

    fetch(translatedurl(text1))
    .then(response=>response.json())
    .then(json=>{
        var finalresult=json.contents.translated;
        txtoutput.innerText=finalresult;
    })
};

submitbutton.addEventListener("click",onclicked)
