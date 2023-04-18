function verificaImagem(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(true);
      };
      img.onerror = function() {
        resolve(false);
      };
      img.src = url;
    });
  }
  
 export async function validarImagem(url) {
    var resultado = await verificaImagem(url);
    console.log(resultado); // true ou false
  }
  