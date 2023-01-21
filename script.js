

function getComputerChoice () {
    let piedras = "piedra";
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
        resultado = tijeras;
    }
    return resultado;
}




function playRound () {
  let playerSelection = prompt("Piedra, Papel o Tijeras!").toLowerCase();
    let a = playerSelection;
    let b = getComputerChoice();
    let result;
    
    if (a == b) {
        result = "Empate!";
    }
    else if (a == "piedra" && b == "papel"|| a == "papel" && b == "tijeras"|| a == "tijeras" && b == "piedra") {
        result = "Perdiste! " + b + " gana a "+ a;
        
    }
    else if (a == "piedra" && b == "tijeras"|| a == "papel" && b == "piedra"|| a == "tijeras" && b == "papel") {
        result = "Ganaste " + a +" gana a " + b;
    }
    return result;
}

function game () {

    for(let i = 0; i < 5; i++) {
       alert(playRound());      
    }
}

game();

