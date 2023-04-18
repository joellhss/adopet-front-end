let hostname = "http://localhost:8080";

const save = (nome, email, senha, telefone, urlImage) => {
     let post = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nome, 
            email: email,
            password: senha,
            phone: telefone,
            url: urlImage
        }) 
    }
    
    return fetch(hostname + "/users", post)
    .then(resposta => {
        console.log(resposta)
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possível criar o produto.")
    })
}


export const userServices = {
    save,
}