let puntuacion = 0;
let puntuacionpc = 0;

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
        puntuacionpc = puntuacionpc + 1;
    }   
    else if (a == "piedra" && b == "tijeras"|| a == "papel" && b == "piedra"|| a == "tijeras" && b == "papel") {
        result = "Ganaste " + a +" gana a " + b;
        puntuacion = puntuacion + 1;
    }
    return alert(result);
}

function game () {
    let sigue = true;
    while (sigue) {
       playRound();
       console.table(puntuacion, puntuacionpc);
       if (puntuacion >= 5) {
        alert("GANASTE");
        sigue = false;
        }
        if (puntuacionpc >= 5){
        alert("PERDISTE");
        sigue = false;
        }
    }
    
    
    puntuacion = 0;
    puntuacionpc = 0;
}


game();
