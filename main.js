let nomeUsuário =  prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == ``){
    nomeUsuário = prompt(`Qual p seu nome?`);
}

if(nomeUsuário == null){
    elemento.textContent = `Seja bem-vindo!`
}else {
    elemento.textContent = nomeUsuário;

};