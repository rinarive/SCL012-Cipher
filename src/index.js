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
};
document.getElementById("cod").addEventListener('click',hability);
function hability(){
 

   
};
document.getElementById("deCod").addEventListener('mouseover',hability2);
function hability2(){


  

};
document.getElementById("btn2").addEventListener("click",enviar);
function enviar () {
    let age = document.getElementById("age").value;
    let numOff = age
    let secretWord = document.getElementById("secretWord").value;
    codCipher = parseInt(numOff)+ parseInt(secretWord.length);
    cipher.style.display = "block"
    welcome.style.display = "none"
    loging.style.display = "none"

};
document.getElementById("btn3").addEventListener("click",salir);
function salir () {
    window.location.reload()
};
