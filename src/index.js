const welcome = document.getElementById("welcome");
const loging = document.getElementById("loging");
const cipher = document.getElementById("cipher");
const textName = document.getElementById("textName");
document.getElementById("btn1").addEventListener("click", inicio);
function inicio () {
    let name = document.getElementById("name").value;
    textName.innerHTML= "Hola, " + name 
    welcome.style.display = "none"
    loging.style.display = "block"
    cipher.style.display = "none"
}
let codCipher = "";
let resultado = document.getElementById("resultado");
document.getElementById("btn2").addEventListener("click",enviar);
function enviar () {
    let age = document.getElementById("age").value;
if ( age === ""){
        alert('Ingresa un número que recuerdes fácilmente');
        return("loging");
}else( age === "number");{
    let numOff = age
    let secretWord = document.getElementById("secretWord").value;
    codCipher = parseInt(numOff)+ parseInt(secretWord.length)
}
    cipher.style.display = "block"
    welcome.style.display = "none"
    loging.style.display = "none"
} 
document.getElementById("btn3").addEventListener("click",salir);
function salir () {
    window.location.reload()
}
document.getElementById("codificar").addEventListener("click", passCod)
function passCod() {
 let password = document.getElementById("password").value;
if ( password === ""){
    alert('Ingresa un password a codificar')
}
 window.cipher.encode (password,codCipher);
 resultado.innerHTML = window.cipher.encode (password,codCipher);
} 
document.getElementById("decodificar").addEventListener("click", passDecod);
function passDecod() {
 let password = document.getElementById("password").value;
if ( password === ""){
    alert('Ingresa un password a decodificar')
}
 window.cipher.decode(password,codCipher);
 resultado.innerHTML = window.cipher.decode (password,codCipher);
}
let resultCopy= document.getElementById('resultCopy');
resultCopy.addEventListener('click', copying);
function copying() {
  let password = document.getElementById("password");
  resultado.select();
  document.execCommand("copy");
  password.value =""
}