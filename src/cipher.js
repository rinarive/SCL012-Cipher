window.cipher = {
  encode: () => {
    /* Acá va tu código */
    let password = document.getElementById("password").value;
 let cipEncode = "";
  for (let i = 0; i < password.length; i++) {
    let txt = password.charCodeAt(i);
    if (65 <= txt && txt <= 90) {
      cipEncode += String.fromCharCode(
      ((txt - 65 + parseInt(codCipher)) % 26) + 65);
    }else{
      cipEncode += password.charAt(i);
    } 
  }
  let resultado = document.getElementById("resultado"); 
   resultado.innerHTML = cipEncode;
  },
  decode: () => {
    /* Acá va tu código */
    let password = document.getElementById("password").value;
 let cipDecode = "";
  for (let i = 0; i < password.length; i++) {
    let txt = password.charCodeAt(i);
    if (65 <= txt && txt <= 90) {
     cipDecode += String.fromCharCode(
     ((txt + 65 - parseInt(codCipher)) % 26) + 65);
    }else{
      cipDecode += password.charAt(i);
    }
  }
  let resultado = document.getElementById("resultado");
    resultado.innerHTML = cipDecode;
  }
};
