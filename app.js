
// varibles y arrayas
let usuario 
let resultado
let multiplicar
let resultadoMulti
let resultadoError 
const persona = []
const numeros = []
const error = []

// Funcion solicitar nombre en caso de ser un numero arroja error

usuario = () =>{

    usuario = prompt("Ingresa tú nombre, no adminte números")
        while (!isNaN(usuario)){
            alert("No ingresaste u dato valido")

            error.push(usuario)     
            
        usuario = prompt("Ingresa tú nombre")   
    }

    persona.push(usuario)   

    resultadoError = () => {
        if (error.length > 0) {
            alert(`Los datos erroneos al querer ingresar Nombre fueron: ${error.join("-")}`)
        }else{
            alert(`Bienvenido ${usuario}`) 
        }     
    } 
}    


//funcion sumar

const sumar = () => {   
    
    let num1=parseInt(prompt('Ingresa un numero a sumar'));
    numeros.push(num1);
    let num2=parseInt(prompt('Ingresa otro numero a sumar'));
    numeros.push(num2);
    resultado = num1 + num2;
    numeros.push(resultado);


    
    alert(`El resultado de la suma es ${resultado}`);
    
   
    // condicional par impar sobre resultado de la suma

    if (resultado % 2) {
        
        alert('El resultado de la suma es un número impar')
    } else {
        alert('El resultado de la suma es un número par')   
    }
    
    // funcion multiplicar sobre el resultado de la suma   
    
    
    multiplicar = () => {
        
        let multi=parseInt(prompt("Ingrese un numero a multiplicar por el resultado de la suma"))
        resultadoMulti = resultado * multi;
        numeros.push(resultadoMulti)
        
        alert(`Resultado de la multiplicación es ${resultadoMulti}`);
        
    }       
   
    
} 

// llamado a las funciones

const iniciar = () =>{
    usuario();
    resultadoError();
    sumar();
    multiplicar();
    console.log(`Los números utilizados para los ejercicios fueron: ${numeros.join("-")}`)
    console.log(`Tu nombre es: ${persona}`)
    alert( "Primer entrega del curso ! JavaScript !")
    
}

// iniciar();













