window.cipher = {
  encode: (password, codCipher) => {
    let cipEncode = "";
  for (let i = 0; i < password.length; i++) {
    let txt = password.charCodeAt(i);
     if (65 <= txt && txt <= 90) {
      cipEncode += String.fromCharCode(
      ((txt - 65 + parseInt(codCipher)) % 26) + 65);
    } else if (97 <= txt && txt <= 122) {
      cipEncode += String.fromCharCode(
        ((txt - 97 + parseInt(codCipher)) % 26) + 97);
    } else {
      cipEncode += password.charAt(i);
    } 
  }
   return cipEncode;
  },
  decode: (password, codCipher) => {
    let cipDecode = "";
  for (let i = 0; i < password.length; i++) {
    let txt = password.charCodeAt(i);
    if (65 <= txt && txt <= 90) {
     cipDecode += String.fromCharCode(
     ((txt - 90 - parseInt(codCipher)) % 26) + 90);
    } else if (97 <= txt && txt <= 122) {
      cipDecode += String.fromCharCode(
        ((txt - 122 - parseInt(codCipher)) % 26) + 122);
    }else{  
        cipDecode += password.charAt(i);
    }
  }
   return cipDecode;
  }
};
