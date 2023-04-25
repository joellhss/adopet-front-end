import { userServices } from "../services/userServices.js";
import { alert } from "../js/components/alertInputValidation.js"

(() => {
    const form = document.querySelector("form")

form.addEventListener("submit", logarNaConta)


async function logarNaConta(event) {
    event.preventDefault();
    
    const email = event.srcElement[0].value;
    const senha = event.srcElement[1].value;

    try {
        const data = await userServices.login(email, senha)
        if(data.mensagem === "E-mail inválido!") {
            alert.inputInvalido("inputEmail", "Não localizamos este email na nossa base de dados.")

        } else if(data.mensagem === "Senha inválida") {
            alert.inputValido("inputEmail")
            alert.inputInvalido("inputPassword", "Senha inválida.")
        } else {
            alert.inputValido("inputEmail")
            alert.inputValido("inputPassword")
            
            loadUserPage(data)
        }


    } catch(err) {
        console.error("Erro:", err)
    }
}


function loadUserPage(objetoUser) {
    const dateAndTime = new Date().toISOString();

    let profileSave = {
        id: objetoUser.id,
        nome: objetoUser.name,
        email: objetoUser.email,
        phoneNumber: objetoUser.phoneNumber,
        photo: objetoUser.url,
        data: dateAndTime
    }

    localStorage.setItem("user", JSON.stringify(profileSave))

    window.location.href = "../pages/userPage.html"
}

})()