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


})();
