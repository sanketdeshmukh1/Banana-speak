var submitbutton=document.querySelector("#submit-button")
var txtarea=document.querySelector("#txt-area")
var txtoutput=document.querySelector("#txt-output")
function onclicked()
{
txtoutput.innerHTML="output is"+txtarea.value+"afdcsdfvgv"
}

submitbutton.addEventListener("click",onclicked)
