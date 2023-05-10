const hostname = "http://adopet-api2-env.eba-wnagn2dz.sa-east-1.elasticbeanstalk.com";

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
        console.log(resposta)
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
            'Content-type': 'application/json'
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

export const userServices = {
    save,
    login,
}