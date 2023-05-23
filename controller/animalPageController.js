import { animalServices } from "../services/animalServices.js"
import { userServices } from "../services/userServices.js";

const url = new URLSearchParams(window.location.search)
const id = url.get("id");

(async () => {
    $('main').css("opacity", 0).delay(500).animate({opacity: 1}, 500);

    if(id == null) {
        window.location.href = "/index.html"
    }
    
    const dadosDoAnimal = await animalServices.getAnimalById(id);

    const img = document.getElementById("img-animal")
    const name = document.getElementById("name-animal")
    const age = document.getElementById("age-animal")
    const breed = document.getElementById("breed-animal")
    const castrated = document.getElementById("castrated-animal")
    const size = document.getElementById("size-animal")
    const description = document.getElementById("description-animal")

    const idSize = dadosDoAnimal.idSize
    const sizeValue = idSize == 1 ? "Pequeno": idSize == 2 ? "Médio" : idSize == 3 ? "Grande" : "Indefinido"
    
    
    img.src = dadosDoAnimal.url_image
    name.innerText = dadosDoAnimal.name
    age.innerText = dadosDoAnimal.age
    breed.innerText = dadosDoAnimal.breed
    castrated.innerText = dadosDoAnimal.castrated == true ? "Sim" : "Não";
    size.innerText = sizeValue
    description.innerText = dadosDoAnimal.description

    const button = document.getElementById("button-animal")

    button.addEventListener("click", e => {
        exibeInfos(dadosDoAnimal.idUser)
    })

})();



async function exibeInfos(idUser) {
    const divUser = document.querySelector(".user-content")
    if(divUser == null) {
        const dadosDoUsuario = await userServices.getAll();
        dadosDoUsuario.forEach(element => {
            if(idUser == element.id) {
                dados(element)
                return;
            }
        });
    }
}


function dados(element) {
    const div = document.createElement("div")
    div.classList.add("user-content")
    div.innerHTML = `<p><span>Nome do usuário:</span> ${element.name}</p><p><span>Contato:</span> ${element.phoneNumber}`
    const newDiv = $(div)
    
    $("main").append(newDiv.css('opacity', 0))
    newDiv.delay(300).animate({opacity: 1}, 500);
}
