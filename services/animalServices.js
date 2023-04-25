const hostname = "http://localhost:8080";

const getAllById = (id) => {
   return fetch(hostname + "/animals/user/" + id)
    .then(response => response.json())
    .catch(err => console.error(err))
}


export const animalServices = {
    getAllById
}