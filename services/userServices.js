const hostname = "https://adopet-api-1686699323029.azurewebsites.net";

const save = (nome, email, senha, telefone, urlImage) => {
     let post = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nome, 
            phoneNumber: telefone,
            email: email,
            password: senha,
            url: urlImage
        }) 
    }
    
    return fetch(hostname + "/users/create", post)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possível realizar o cadastro.")
    })
}

const login = (email, senha) => {
    let post = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: senha
        }) 
    }

    return fetch(hostname + "/users", post)
        .then(resposta => {
            return resposta.json();
        })
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(error => {
            console.error(error); // exibe o erro no console
            console.clear(); // limpa o console
          });
}

const getAll = () => {
    return fetch(hostname + "/users")
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error("Não foi possível realizar o cadastro.")
    })
}

export const userServices = {
    save,
    login,
    getAll
}