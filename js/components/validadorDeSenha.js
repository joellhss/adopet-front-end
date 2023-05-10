export function validadorDeSenha(senha) {
    const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={[}\]|\\:;"'<,>.?/]{8,}$/

    ;

    if(regexSenha.test(senha)) {
        return true;
    } else {
        return false;
    }
}