const hostname = "http://localhost:8080";

const getAllById = (id) => {
   return fetch(hostname + "/animals/user/" + id)
    .then(response => console.log(response.json()))
}


export const animalServices = {
    getAllById
}