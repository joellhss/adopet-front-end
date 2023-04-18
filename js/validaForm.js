import { validadorDeImagens } from "./validadorDeImagens.js";
import { validadorDeTelefone } from "./validadorDeTelefone.js";
import { validadorDeEmail } from "./validadorDeEmail.js";
import { validadorDeSenha } from "./validadorDeSenha.js";
import { registrarUsuario } from "../controller/registrationController.js";


const inputs = document.querySelectorAll("input")

let validacoes = {
    email: {
        validaEmail: false,
        emailContent:  ""

    },
    nome: {
        validaNome: false,
        nomeContent: ""
    },
    foto: {
        validaFoto: true,
        fotoContent: ""
    },
    tel: {
        validaTel: false,
        telContent: ""
    },
    senha: {
        validaSenha: false,
        validaConfirmaSenha: false,
        senhaContent: ""
    }
}

inputs.forEach(input => {
    input.addEventListener("blur", validaInput)
});

async function validaInput(event) {
    const content = event.target.value;
    const inputId = event.target.id;

    switch(inputId) {
        case "inputNome":
            if(content.length <= 3) {
                inputInvalido(inputId, "Seu nome precisa conter mais de 3 caracteres.");
                validacoes.nome.validaNome = false;
            } else {
                inputValido(inputId)
                validacoes.nome.validaNome = true;
                validacoes.nome.nomeContent = content;
            }
            break;

        case "inputImg":
            const teste = await validadorDeImagens(content)
            if(teste || content == "") {
                inputValido(inputId);
                validacoes.foto.validaFoto = true;
                validacoes.foto.fotoContent = content;
            } else {
                inputInvalido(inputId, "Sinto muito, mas não consigo compreender esta url.");
                validacoes.foto.validaFoto = false;
            }
            break;

        case "inputTel":
            if(validadorDeTelefone(content)) {
                inputValido(inputId)
                validacoes.tel.validaTel = true;
                validacoes.tel.telContent = content;
            } else {
                inputInvalido(inputId, "Por favor, queira revisar o número de telefone digitado.")
                validacoes.tel.validaTel = false;
            }
            break;
        case "inputEmail":
            if(validadorDeEmail(content)) {
                inputValido(inputId);
                validacoes.email.validaEmail= true;
                validacoes.email.emailContent = content;
            } else {
                inputInvalido(inputId, "Por favor, queira revisar o e-mail digitado.")
                validacoes.email.validaEmail = false;
            }
            break;

        case "inputSenha":
            if(validadorDeSenha(content)) {
                inputValido(inputId)
                validacoes.senha.validaSenha = true;
                validacoes.senha.senhaContent = content;
            } else {
                inputInvalido(inputId, "A senha deve possuir no mínimo 8 caracteres, incluindo letras (abc...), números (123...) e símbolos (%#@…).")
                validacoes.senha.validaSenha = false;
            }
            break;
        case "inputConfirmaSenha":
            const senha = document.getElementById("inputSenha").value
            if(content === senha && content != "") {
                inputValido(inputId)
                validacoes.senha.validaConfirmaSenha = true;
            } else {
                inputInvalido(inputId, "A senha informada neste campo, deve ser a mesma do campo anterior.")
                validacoes.senha.validaConfirmaSenha = false;
            }
            
    }
}

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




const form = document.querySelector("form")

form.addEventListener("submit", event => {
    event.preventDefault();

    const validaForm = validacoes.email.validaEmail && validacoes.foto.validaFoto && validacoes.nome.validaNome && validacoes.senha.validaSenha && validacoes.senha.validaConfirmaSenha && validacoes.tel.validaTel

    if(validaForm) {
        registrarUsuario(validacoes.nome.nomeContent, validacoes.foto.fotoContent, validacoes.tel.telContent, validacoes.email.emailContent, validacoes.senha.senhaContent)
    }

})

