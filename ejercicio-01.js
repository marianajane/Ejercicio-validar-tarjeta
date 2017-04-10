function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined) { //Test case 1
        return("Ingresa un numero");
    }

    if(typeof creditCardNumber != "number") { //Test case 2 Typeof
        return("Error de dato");
    }

    if(numeroDigitos(creditCardNumber) != true) { //Test case 3, function numeroDigitos()
        return("Faltan numeros");
    }

    if(validCredit(creditCardNumber) == true) {
        return true;
    } else {
        return false;
    }
}

//Test case 3
function numeroDigitos(creditCardNumber){
    var numero = creditCardNumber.toString();
    if(numero.length == 16){
        return(true);
    }
}

//Test case 4 y 5
function validCredit(creditCardNumber){
  
    var numString = (creditCardNumber.toString()).split("");
  
    var numeros = numString.map(arregloNumeros);
  
    var numMultiplica = numeros.map(multiplicacionPares); 
}
  



// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}