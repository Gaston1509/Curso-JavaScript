
let nombre;
let apellido;
let localidad;
let meses;

function viajar(){

    let nombre=prompt(`Ingrese su nombre:`);
       let firstName = nombre;
    let apellido=prompt(`ingrese su apellido:`);

    let pastName= apellido;
   
    localidad=prompt(`ingresa la ciudad donde desea viajar, Córdoba, Mendoza, Jujuy o Ushuaia`).toLowerCase(); 
       let ciudad = localidad;

    meses=prompt(`Ingresa la fecha en la que deseas viajar,`).toLowerCase();

    let fecha = meses;

    if (localidad === "cordoba" && fecha || localidad === "jujuy" && fecha || localidad === "mendoza" && fecha || localidad === "ushuaia" && fecha) {
        console.log(`${firstName} ${pastName} Se acaba de reservar viaje a la ciudad de ${localidad} para ${meses}`)
            
    }else{
        alert(`No poseemos reservas a esa región`)
    }
    
}
viajar();



