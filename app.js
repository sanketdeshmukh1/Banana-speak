var submitbutton=document.querySelector("#submit-button")
var txtarea=document.querySelector("#txt-area")

function onclicked()
{
console.log("button is clicked",)
console.log("user entered-",txtarea.value);
}

submitbutton.addEventListener("click",onclicked)
