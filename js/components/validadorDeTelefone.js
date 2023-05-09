export function validadorDeTelefone(tel) {
    const regexSenha = /^\(\d{2}\)\d{4,5}-\d{4}$/;

    if(regexSenha.test(tel)) {
        return true;
    } else {
        return false;
    }
}