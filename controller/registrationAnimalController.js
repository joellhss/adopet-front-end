import { animalServices } from "../services/animalServices.js"

const form = document.querySelector("form");

(async function() {
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

    form.addEventListener("submit", cadastrarAnimal)
}())


function cadastrarAnimal(event) {
    event.preventDefault();
    console.log(event)
}