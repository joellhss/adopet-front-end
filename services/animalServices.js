const hostname = "//adopet-app.criarsite.online";

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

const createAnimal = (idUser, nome, idade, castrado, especie, porte, foto, descricao, raca) => {
    let post = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nome,
            description: descricao,
            age: idade,
            url_image: foto,
            breed: raca,
            castrated: castrado,
            idUser: idUser,
            idSpecies: especie,
            idSize: porte
        }) 
    }

    return fetch(hostname + "/animals", post)
    .then(resposta => {
        console.log(resposta)
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possível realizar o cadastro.")
    })
}

const getAnimalById = (id) => {
    return fetch(hostname + "/animals/" + id)
     .then(response => response.json())
     .catch(err => console.error(err))
 }

const updateAnimal = (idAnimal, idUser, nome, idade, castrado, especie, porte, foto, descricao, raca) => {
let put = {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        animalId: idAnimal,
        name: nome,
        description: descricao,
        age: idade,
        url_image: foto,
        breed: raca,
        castrated: castrado,
        idSpecies: especie,
        idSize: porte,
        idUser: idUser
        }) 
    }

    return fetch(hostname + "/animals", put)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possível realizar a atualização.")
    })
}

const deleteById = (id) => {
    let deleteMethod = {
            method: "DELETE",
    }
    
    return fetch(hostname + "/animals/" + id, deleteMethod)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.ok
        }
        throw new Error("Não foi possível realizar a exclusão.")
    })
}



export const animalServices = {
    getAllById,
    getSize,
    getSpecies,
    createAnimal,
    getAnimalById,
    updateAnimal,
    deleteById
}