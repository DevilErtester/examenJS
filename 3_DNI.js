window.addEventListener('DOMContentLoaded',main);

let peso_max=2000;
let pero_min=0;

function main(){


    document.getElementById('boto').addEventListener('click',tarifa);


}

function mensaje(peso,tarifa){

    let aviso;
    costo=peso*tarifa;
    return  aviso = "El costo es de= " + costo;

}
function tarifa(){

    let peso = parseInt(document.getElementById('pes').value);//lo paso a numero
    let tipus = document.getElementsByName('tipus'); ///agarro todos los tipus
    let zonas = document.getElementsByName('zona'); ///agarro todas las zonas
    let zona_seleccionada = '';//aqui guardare la zona seleccionada
    let tipo_seleccionado = '';///aqui guardare el tipu seleccionado
    let i;
    let j;

    ///bucle para ingresar un paso valido
    do{

        peso=prompt("Ingresa un peso valido");
        
        /** hay un pequeño error aunque ingreses un peso valido la primera vez
         * te lo pedira de nuevo, si vuelves a colocar un peso correcto sale
        */
    }while((isNaN(peso) || peso<=pero_min || peso >=peso_max));

    ///hago un recorrido por los tipus 
    for(i=0;i<tipus.length;i++)
    {
        if(tipus[i].checked){

            //guardo el tipu seleccionado
            tipo_seleccionado=tipus[i].value;

        }

    }

     ///hago un recorrido por las zonas
     for(i=0;i<zonas.length;i++) {

         if(zonas[i].checked){
 
             //guardo la zona seleccionada
             zona_seleccionada=zonas[i].value;
 
         }
 
     }

    if(tipo_seleccionado == '' || zona_seleccionada == ''){

        alert("Selecciona un tipo o una zona porfavor");

    } else { ///si todo marcha bien

            //alert("zona seleccionada " + zona_seleccionada + "tarifas " + tipo_seleccionado); 
            //hago un recorrigo por el array de zonas
            for(i=0;i<zones.length;i++){

                ///haho un recoorifo por las tarifas
                for(j=0;j<tarifes.length;j++){
                        
                    ///verifico que las zonas y tarifas seleccionadas esten el el array
                    if(tarifes[j]==tipo_seleccionado && zones[i]==zona_seleccionada){
                        
                         /**
                             * falta hacer el costo del envio dependiento de la zona y la taridas
                             * y luego seria hacer un recorrido por el array de los precios dependiento del peso para hacer el costo
                             * el problema es que no se como ingresar a la posicion requerida para hacer los calculos
                             * dependiento de la zona y la tarifa
                        */
                        if(peso<=20){

                            ///cuando se haga el calculo muestro el costo 
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);

                        }else if (peso<=50){
                            
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);
                            
    
                        }else if (peso<=100){
                            
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);
                            
    
                        }else if (peso<=500){
                            
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);
                            
    
                        }else if (peso<=1000){
                            
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);
                            
    
                        }else if (peso<=2000){
                            
                            document.getElementsByName('preu').innerHTML = mensaje(peso,tarifa);
                            
    
                        }

                    }

                }


            }
       


    }


    /*
    ///hago un recorrido por las zonas
    for(i=0;i<zonas.length;i++)
    {
        if(zonas[i].checked){

            //guardo la que selecciono el usuario
            zona_seleccionada=zonas[i].value;

        }
    }
    */

}