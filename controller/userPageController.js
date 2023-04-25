import { animalServices } from "../services/animalServices.js";

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
    window.location.href = "../pages/login.html"
}

(async function() {
    const dadosLocal = JSON.parse(localStorage.getItem("user"));

    const img = document.getElementById("img-profile-header")
    const name = document.getElementById("user-name")
    
    
    name.innerText = dadosLocal.nome
    img.src = dadosLocal.photo

    const dadosAnimal = await animalServices.getAllById(dadosLocal.id)
    if(dadosAnimal.length < 1) {
        console.log("Nada a ser exibido aqui")
    } else {
        loadAnimal(dadosAnimal)
    }
})();


function loadAnimal(array) {
    const gridBox = document.getElementById("grid-animals-body")

    array.forEach(animal => {
        const box = document.createElement("div")
        box.classList.add("box-animal")
        box.classList.add("d-flex")
        box.classList.add("flex-column")
        let contentBox = `        
                    <h3>${animal.name}</h3>
                    <img src="${animal.url_image}" alt="imagem de capa do animal">
                    <div class="d-flex w-100 mt-2 box-buttons">
                        <button id="${animal.id}" type="button" class="btn btn-dark btn-sm w-100">Editar</button>
                        <button id="${animal.id}" type="button" class="btn btn-danger btn-sm w-100">Deletar</button>
                    </div>
                    `
        box.innerHTML = contentBox;
        gridBox.appendChild(box)
        
    });
}