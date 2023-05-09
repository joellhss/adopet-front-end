import { userServices } from "../services/userServices.js";

export async function registrarUsuario(nome, foto, tel, email, senha) {
    try {
        await userServices.save(nome, email, senha, tel, foto)
        window.location.href = "../pages/registrationSucess.html"
    } catch(err) {
        console.log(err)
        window.location.href = "../pages/registrationFail.html"
    } 
}