import { animalServices } from "../services/animalServices.js"

const form = document.querySelector("form");

async function loadFormRegistration() {
    const size = await animalServices.getSize();
    const species = await animalServices.getSpecies();

    const selectSpecies =document.getElementById("inputEspecie");
    const selectSizes =document.getElementById("selectPorte");

    species.forEach(specie => {
        const option = document.createElement("option");
        option.value = specie.id;
        option.innerText = specie.name;
        selectSpecies.appendChild(option)
    });

    size.forEach(porte => {
        const option = document.createElement("option");
        option.value = porte.id;
        option.innerText = porte.name;
        selectSizes.appendChild(option)
    });


    $("#loading-message").fadeOut(300, function(){
        var delay = 200; // tempo de atraso em milissegundos
        $('form .form-group').each(function(index) {
        $(this).delay(delay * index).animate({opacity: 1}, 500);
        });
    });

};

const url = window.location.href;
const ultimaBarra = url.lastIndexOf("/");
const palavra = url.substring(ultimaBarra + 1);


if(palavra == "registrationAnimal.html") {
    loadFormRegistration()
}

export async function cadastrarAnimal(idUser, nome, idade, castrado, especie, porte, foto, descricao, raca) {
    try {
        await animalServices.createAnimal(idUser, nome, idade, castrado, especie, porte, foto, descricao, raca)
        window.location.href = "../pages/registrationAnimalSucess.html"
    } catch(err) {
        console.log(err)
        window.location.href = "../pages/registrationAnimalFail.html"
    } 
}