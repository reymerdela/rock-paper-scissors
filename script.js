function getComputerChoice () {
    let piedras = "piedras";
    let papel = "papel";
    let tijeras = "tijeras";
    let resultado;
    let numeroAleatorio = ()=> {
        return Math.floor(Math.random() *3) +1;
    }
    let randomNumer = numeroAleatorio();
    if (randomNumer == 1) {
        resultado = piedras;
    }
    else if (randomNumer == 2) {
        resultado = papel;
    }
    else {
        resultado = tijeras
    }
    return resultado;
}

console.log(getComputerChoice());