import { animalServices } from "../services/animalServices.js";
import { validaInput } from "../js/validaAnimalForm.js";

export function editAnimal(id) {
    localStorage.setItem("idAnimal-edit", id)
    window.location.href = "../pages/atualizationAnimal.html"
}

async function loadInfoAnimal() {
    const idAnimal = localStorage.getItem("idAnimal-edit")
    const dados = await animalServices.getAnimalById(idAnimal);
    const size = await animalServices.getSize();
    const specie = await animalServices.getSpecies();

    document.getElementById("inputNome").value = dados.name
    document.getElementById("inputAge").value = dados.age
    document.getElementById("inputCastrado").value = dados.castrated
    document.getElementById("inputEspecie").value = dados.idSpecies
    document.getElementById("inputRaca").value = dados.breed
    document.getElementById("selectPorte").value = dados.idSize
    document.getElementById("inputImg").value = dados.url_image
    document.getElementById("inputDescricao").value = dados.description

    // document.getElementById("loading-message").style.display = "none"
    $("#loading-message").fadeOut(500, function(){
        var delay = 200; // tempo de atraso em milissegundos
        $('form .form-group-att').each(function(index) {
        $(this).delay(delay * index).animate({opacity: 1}, 500);
        });
    });
    const form = document.querySelector("form");
    // form.style.display = "block";

    const formElements = form.elements
    
    for(let i = 0; i < (formElements.length - 1); i++){
        const event = {
            target: {
                value: formElements[i].value,
                id: formElements[i].id
            }
        }

        validaInput(event)
    }
   
};

const url = window.location.href;
const ultimaBarra = url.lastIndexOf("/");
const palavra = url.substring(ultimaBarra + 1);


if(palavra == "atualizationAnimal.html") {
    loadInfoAnimal()
}

export async function atualizarAnimal(idAnimal, idUser, nome, idade, castrado, especie, porte, foto, descricao, raca) {
    try {
        await animalServices.updateAnimal(idAnimal, idUser, nome, idade, castrado, especie, porte, foto, descricao, raca)
        localStorage.removeItem("idAnimal-edit")
        window.location.href = "../pages/registrationAnimalSucess.html"
    } catch(err) {
        console.log(err)
        localStorage.removeItem("idAnimal-edit")
        window.location.href = "../pages/registrationAnimalFail.html"
    } 
}