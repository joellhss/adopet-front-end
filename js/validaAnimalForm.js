import { alert } from "./components/alertInputValidation.js"
import { validadorDeImagens } from "./components/validadorDeImagens.js";
import { cadastrarAnimal } from "../controller/registrationAnimalController.js";
import { atualizarAnimal } from "../controller/editAnimalController.js";

const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach(input => {
    input.addEventListener("blur", validaInput)
});

export async function validaInput(event) {
    const content = event.target.value;
    const inputId = event.target.id;

    switch(inputId){
        case "inputNome":
            if(content.length > 2) {
                alert.inputValido(inputId)
                entityAnimal.nome.valido = true;
                entityAnimal.nome.content = content;
            } else {
                alert.inputInvalido(inputId, "Recomendamos um nome com mais de 2 dígitos")
                entityAnimal.nome.valido = false;
            }
            break;
        case "inputAge":
            if(validarIdade(content)) {
                alert.inputValido(inputId)
                entityAnimal.idade.valido = true
                entityAnimal.idade.content = content
            } else {
                alert.inputInvalido(inputId, "Formato inválido. Informe um número e uma unidade de tempo válida: dia(s), mes(es), semana(s) ou ano(s). Exemplo: 10 dias ou 7 anos")
                entityAnimal.idade.valido = false
            }
            break;

        case "inputCastrado":
            if(content == "Selecione uma opção") {
                alert.inputInvalido(inputId, "É necessário selecionar uma opção.")
                entityAnimal.castrado.valido = false 
            } else {
                alert.inputValido(inputId)
                entityAnimal.castrado.valido = true
                entityAnimal.castrado.content = content 
            }
            break;

        case "inputEspecie":
            if(content == "Selecione uma opção") {
                alert.inputInvalido(inputId, "É necessário selecionar uma opção.")
                entityAnimal.especie.valido = false 
            } else {
                alert.inputValido(inputId)
                entityAnimal.especie.valido = true
                entityAnimal.especie.content = content 
            }
            break;

        case"selectPorte":
            if(content == "Selecione uma opção") {
                alert.inputInvalido(inputId, "É necessário selecionar uma opção.")
                entityAnimal.porte.valido = false 
            } else {
                alert.inputValido(inputId)
                entityAnimal.porte.valido = true
                entityAnimal.porte.content = content 
            }
            break;

        case "inputImg":
            const teste = await validadorDeImagens(content)
            if(teste || content == "") {
                alert.inputValido(inputId);
                entityAnimal.url.content = content 
                entityAnimal.url.valido = true
            } else {
                alert.inputInvalido(inputId, "Sinto muito, mas não consigo compreender esta url.");
                entityAnimal.url.valido = false
            }
            break;
        case "inputDescricao":
            alert.inputValido(inputId)
            entityAnimal.descricao = content;
            break;
        case "inputRaca":
            if(content != "") {
                alert.inputValido(inputId)
                entityAnimal.raca.valido = true
                entityAnimal.raca.content = content
                break;  
            } else {
                alert.inputInvalido(inputId, "Pode ser vira-lata, indefinido, etc.");
                entityAnimal.raca.valido = false
            }
    }

    
}

const entityAnimal = {
    nome: {
        valido: false,
        content: ""
    },
    idade: {
        valido: false,
        content: ""
    },
    castrado: {
        valido: false,
        content: false
    },
    especie: {
        valido: false,
        content: 1
    },
    porte: {
        valido: false,
        content: 1
    },
    url: {
        valido: true,
        content: ""
    },    
    raca: {
        valido: false,
        content: ""
    },
    descricao: ""
}


function validarIdade(campo) {
    
    const valor = campo.trim().toLowerCase();
    const valorNormalizado = valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    var regex = /^(\d+)\s(dias?|mes(es)?|semana(s)?|anos?)$/i;
    
    // Testa se o valor do campo input corresponde à regex
    if (regex.test(valorNormalizado)) {
      // Se sim, retorna true
      return true;
    } else {
      // Se não, exibe uma mensagem de erro e retorna false
      return false;
    }
  }


const form = document.querySelector("form")

const url = window.location.href;
const ultimaBarra = url.lastIndexOf("/");
const palavra = url.substring(ultimaBarra + 1);


if(palavra == "atualizationAnimal.html") {
    form.addEventListener("submit", atualizarAnimalController)
} else if(palavra == "registrationAnimal.html") {
    form.addEventListener("submit", cadastrarAnimalController)
}


function cadastrarAnimalController(event) {
    event.preventDefault();

    if(entityAnimal.nome.valido && entityAnimal.idade.valido && entityAnimal.castrado.valido && entityAnimal.especie.valido && entityAnimal.porte.valido && entityAnimal.url.valido && entityAnimal.raca.valido) {
        const id = JSON.parse(localStorage.getItem("user")).id;
        
        cadastrarAnimal(id, entityAnimal.nome.content, entityAnimal.idade.content, entityAnimal.castrado.content, entityAnimal.especie.content, entityAnimal.porte.content, entityAnimal.url.content, entityAnimal.descricao, entityAnimal.raca.content)
    }
}

function atualizarAnimalController(event) {
    event.preventDefault();

    if(entityAnimal.nome.valido && entityAnimal.idade.valido && entityAnimal.castrado.valido && entityAnimal.especie.valido && entityAnimal.porte.valido && entityAnimal.url.valido && entityAnimal.raca.valido) {
        const idUser = JSON.parse(localStorage.getItem("user")).id;
        const idAnimal = localStorage.getItem("idAnimal-edit");
        
        atualizarAnimal(idUser, entityAnimal.nome.content, entityAnimal.idade.content, entityAnimal.castrado.content, entityAnimal.especie.content, entityAnimal.porte.content, entityAnimal.url.content, entityAnimal.descricao, entityAnimal.raca.content)
    }

}