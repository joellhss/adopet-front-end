function inputInvalido(id, text) {
    const selectInput = document.getElementById(id);
    const novoElemento = `<p class="text-danger fst-italic input-alert" id="input-alert">${text}</p>`
    
    selectInput.style.border = "1px solid red";
    
    const inputAlertExist = selectInput.nextSibling
    if(inputAlertExist.id != "input-alert") {
        selectInput.insertAdjacentHTML('afterend', novoElemento)
    }

}

function inputValido(id) {
    const selectInput = document.getElementById(id);   
    const nextSibling = selectInput.nextSibling;

    selectInput.style.border = "1px solid green";
    
    const inputAlertExist = selectInput.nextSibling
    
    if(inputAlertExist.id == "input-alert") {
        selectInput.parentNode.removeChild(nextSibling)
    }
    
}


export const alert = {
    inputValido,
    inputInvalido
}