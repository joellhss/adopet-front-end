const hostname = "http://localhost:8080";

const getAllById = (id) => {
   return fetch(hostname + "/animals/user/" + id)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const getSize = () => {
    return fetch(hostname + "/size")
    .then(response => response.json())
    .catch(err => console.error(err))
}

const getSpecies = () => {
    return fetch(hostname + "/species")
    .then(response => response.json())
    .catch(err => console.error(err))
}

export const animalServices = {
    getAllById,
    getSize,
    getSpecies
}