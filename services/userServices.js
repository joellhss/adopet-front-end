let hostname = "http://localhost:8080";

const registro = (nome, email, senha, telefone, urlImage) => {
     let post = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
            name: nome, 
            email: email,
            password: senha,
            phone: telefone,
            url: urlImage
        })
    
    }
    
    return fetch(hostname + "/users", post)
    .then(response => console.log(response.json()))
}


export const userServices = {
    registro,
}