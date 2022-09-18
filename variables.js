let nombre= "programacion" + "facil.";
let saludo= "les doy la bienvenida al";
let todos= " mundo de la "
let fraseCompleta= saludo + todos + nombre;
console.log(fraseCompleta);

let frase = "javascript" + " es un lenguaje " + " esencial para crear " + " sitios web poderosos.";
console.log(frase);


let numerostring1 = " numero " + " 10 ";
let numerostring2 = " numero " + " 20 ";
let numerostring3 = " numero " + " 30 ";
let concatena = numerostring1 + numerostring2 + numerostring3;

console.log(concatena);

let edad= prompt("introduce tu edad");
let sexo= prompt("introduce tu sexo");
    if  ((sexo == "femenino") && (edad >= 18))
    {alert("Puedes entrar, eres mayor de edad.");}

    else if ((sexo == "masculino") && (edad >= 21))
     {alert("Puedes entrar, eres mayor de edad.");}

    else {alert("No puedes entrar, eres menor de edad.");}