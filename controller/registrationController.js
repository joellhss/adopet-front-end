import { userServices } from "../services/userServices.js";

import { validarImagem } from "../js/validadorDeImagens.js";
import { validarEmail } from "../js/validadorDeEmail.js";
import { validadorDeTelefone  } from "../js/validadorDeTelefone.js";

console.log(validarImagem("caminho/da/imagem.png"))
console.log(validarEmail("joel@email.com"))
console.log(validadorDeTelefone("(87)98853-3943"))