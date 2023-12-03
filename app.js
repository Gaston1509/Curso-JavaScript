
function cajaNavidad() {

    while (true)  {
    let llenarCaja = confirm('Desea ingresar productos la caja navideña');
    llenarCaja = prompt('Que producto desea agregar a la caja de navidad:\n Pan dulce \n Sidra \n Champagne \n Garrapiñada \n Mantecol \n Turrón\n Budin').toLowerCase();

   
  
    if (llenarCaja==="pan dulce" || llenarCaja==="sidra" || llenarCaja==="champagne" || llenarCaja==="garrapiñada" || llenarCaja==="mantecol" || llenarCaja==="turron" || llenarCaja==="turrón" || llenarCaja==="budin" || llenarCaja==="budín"){ 
            
         alert(`${llenarCaja} se agredo a la caja`);
         console.log(llenarCaja);

    }else{
         alert('Producto no esta en stock');
         break;
    }
         llenarCaja++
    }
    } 

    cajaNavidad();
    
  

   


 



