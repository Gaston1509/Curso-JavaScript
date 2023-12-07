
// varibles
let usuario 
let resultado
let multiplicar
let resultadoMulti
const persona = []
const numeros = []
const error = []

// Funcion solicitar nombre en caso de ser un numero arroja error
usuario = () =>{

    usuario = prompt("Ingresa tú nombre")
        while (!isNaN(usuario)){
            alert("Dato no valido")
            error.push(usuario)     
            
        usuario = prompt("Ingresa tú nombre")   
    }
    persona.push(usuario) 
   
    }

    //funcion sumar

    const sumar = () => { 

    let num1=parseInt(prompt('Ingrese un numero a sumar'));
    numeros.push(num1);
    let num2=parseInt(prompt('Ingrese otro numero a sumar'));
    numeros.push(num2);
    let resultado = num1 + num2;
    numeros.push(resultado);

    alert(`El resultado de la suma es ${resultado}`);

    // condicional par impar sobre resultado de la suma

      if (resultado % 2) {

        alert('El resultado de la suma es un número impar')
    } else {

        alert('El resultado de la suma es un número par')   
     };

  // funcion multiplicar sobre el resultado de la suma   

multiplicar = () => {

    let multi=parseInt(prompt("Ingrese un numero a multiplicar por el resultado"))
    let resultadoMulti = resultado * multi;
    numeros.push(resultadoMulti)

    alert(`Resultado de la multiplicación es ${resultadoMulti}`);
}
    // return de la funcion sumar
   
    return "Primer entrega del curso JavaScript"
}

// llamado a las funciones
usuario()
const saludo = sumar();
multiplicar();
console.log(`Los números utilizados son ${numeros.join("-")}`)
console.log(`Tu nombre es ${persona}`)
alert(`Los datos erroneos fueron ${error.join("-")}`)
console.log(saludo);













 



