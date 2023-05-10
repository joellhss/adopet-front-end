import { animalServices } from "../services/animalServices.js";

export async function deleteAnimal(id) {
    try{
        await animalServices.deleteById(id);
        location.reload();
    } catch(err) {
        $(`#close-modal-${id}`).click();

        document.getElementById("status-message").style.display = "block";
        $("#status-message").delay(2000).fadeOut(500);

    }
}

