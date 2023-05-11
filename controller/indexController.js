import { animalServices } from "../services/animalServices.js"

(async () => {
    const listaDeAnimais =await animalServices.getAll();
    const listaDeEspecies =await animalServices.getSpecies();
    console.log(listaDeAnimais)

    const boxAnimal = $("#box-animals")

    listaDeEspecies.forEach(element => {
        const boxLista = $(insereListaDeEspecies(element))
        boxAnimal.append(boxLista.css('opacity', 0).animate({opacity: 1}, 500));

        listaDeAnimais.forEach((animal, index) => {
            if(animal.idSpecies == element.id && index < 9) {
                const animalElement = $(cardAnimal(animal))
                $(`#specieId-${element.id}`).append(animalElement.css('opacity', 0))
                animalElement.delay(index * 300).animate({opacity: 1}, 500);
            }

            
        })

    });
})();

function insereListaDeEspecies(objeto) {
    const boxList = document.createElement("section");
    boxList.classList.add("box-animals-list");

    const boxListHeader = document.createElement("div");
    boxListHeader.classList.add("box-animals-list-header");
    boxListHeader.innerHTML = `<h2>${objeto.name}</h2> <a href="#">Ver todos</a>`
    
    const boxListBody = document.createElement("div");
    boxListBody.classList.add("box-animals-list-body");
    boxListBody.id = "specieId-" + objeto.id

    boxList.appendChild(boxListHeader);
    boxList.appendChild(boxListBody)

    return boxList;

    
//       <a href="#" class="card-animal">
//         <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg" alt="">
//         <h3 class="">Huskies</h3>
//       </a>
//       <a href="#" class="card-animal">
//         <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg" alt="">
//         <h3 class="">Huskies</h3>
//       </a>
//       <a href="#" class="card-animal">
//         <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg" alt="">
//         <h3 class="">Huskies</h3>
//       </a>
//       <a href="#" class="card-animal">
//         <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg" alt="">
//         <h3 class="">Huskies</h3>
//       </a>


}

function cardAnimal(animalObject) {
    const card = document.createElement("a");
    card.href = `#`
    card.classList.add("card-animal")

    const img = document.createElement("img");
    img.src = animalObject.url_image || "https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg";
    img.alt = animalObject.name;

    const name = document.createElement("h3");
    name.textContent = animalObject.name;

    card.appendChild(img);
    card.appendChild(name);

    return card;
}
