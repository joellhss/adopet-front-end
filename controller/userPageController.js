import { animalServices } from "/services/animalServices.js";
import { editAnimal } from "./editAnimalController.js";
import { deleteAnimal } from "./deleteAnimalController.js";

function hasExpired() {
    const user = JSON.parse(localStorage.getItem('user'))
  
    if (!user) {
      return true; // se não há data armazenada, considera como expirado
    }

    const storedDate = user.data
  
    const accessDate = new Date(storedDate);
    const currentDate = new Date();

    const diff = currentDate.getTime() - accessDate.getTime();
  
    const hoursElapsed = diff / (1000 * 60 * 60);
    return hoursElapsed > 24;
}

hasExpired()

if(hasExpired()) {
    window.location.href = "/pages/login.html"
}

(async function() {
    const dadosLocal = JSON.parse(localStorage.getItem("user"));

    const loadingMessage = document.getElementById('loading-message');

    const img = document.getElementById("img-profile-header")
    const name = document.getElementById("user-name")
    
    loadingMessage.style.display = 'block';
    
    name.innerText = dadosLocal.nome
    img.src = dadosLocal.photo

    const dadosAnimal = await animalServices.getAllById(dadosLocal.id)
    if(dadosAnimal.length < 1) {
        loadingMessage.innerText = 'Clique em "Adicionar" para cadastrar o seu primeiro pet.';
        loadingMessage.style.display = 'block';
    } else {
        loadingMessage.style.display = 'none';
        loadAnimal(dadosAnimal)
    }  
})();


function loadAnimal(array) {
    const gridBox = $('#grid-animals-body')

    array.forEach((animal, index) => {
        const box = $('<div>', {class: 'box-animal d-flex flex-column', id: animal.animalId});

        let contentBox = `        
                    <h3>${animal.name}</h3>
                    <img src="${animal.url_image}" alt="imagem de capa do animal">
                    <div class="d-flex w-100 mt-2 box-buttons">
                        <button id="${animal.animalId}" type="button" class="btn btn-dark btn-sm w-100" data-btn="edit">Editar</button>

                        <!-- Button trigger modal -->
                        <button type="button" id="${animal.animalId}" class="btn btn-danger btn-sm w-100" data-bs-toggle="modal" data-bs-target="#modal-${animal.animalId}">
                        Deletar
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="modal-${animal.animalId}" tabindex="-1" aria-labelledby="excluir" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Deletar animal da lista</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Tem certeza que deseja excluir o(a) ${animal.name}?
                            </div>
                            <div class="modal-footer">
                                <button id="close-modal-${animal.animalId}"type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                                <button type="button" id="${animal.animalId}" class="btn btn-danger" data-btn="delete">Sim</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
        box.append(contentBox)
        gridBox.append(box.css('opacity', 0));

        box.delay(index * 200).animate({opacity: 1}, 500);

    });

    gridBox.on("click", e => {
        if(e.target.dataset.btn === "edit") {
            editAnimal(e.target.id)
        } else if (e.target.dataset.btn === "delete") {
            deleteAnimal(e.target.id)
        }
    })



}

const sair = document.getElementById("sair")

sair.addEventListener("click", e => {
    localStorage.removeItem("user")
    window.location.href = "/pages/login.html"
})