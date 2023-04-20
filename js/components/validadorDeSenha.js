export function validadorDeSenha(senha) {
    const regexSenha = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8}$/;

    if(regexSenha.test(senha)) {
        return true;
    } else {
        return false;
    }
}