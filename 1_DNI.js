window.addEventListener('DOMContentLoaded',main);

function main(){
  
    boto.addEventListener('click',hacer_apuesta);

}

function borrar_inputs(){

    document.getElementById('importAposta').value = '';
    document.getElementById('aposta').value= '';

}

function mensaje(impor_ganado,importAposta,aposta){

    let aviso;
    return  aviso = "Importe ganado = " + impor_ganado + " has apostado " + importAposta + " a la suma " + aposta;

}

function hacer_apuesta(){

    let saldo = document.getElementById('saldo').placeholder;

    //los combierto a numero para poder comparar y saber si es un numero
    let importAposta = parseInt(document.getElementById('importAposta').value);
    let aposta = parseInt(document.getElementById('aposta').value);

    //aqui se guarda el importe
    let impor_ganado;

    /*
        me falta que haga un alert de que el campo no puede estar vacio
        pero aun asi, si llegas a enviar un input vacio saltara el aler del primer if
    */
    if(isNaN(importAposta) || isNaN(aposta) ){

        window.alert("El campo de la aposta o el de los dados deber ser un numero");
    
    }else if(importAposta>saldo){

        alert("La apuesta no puede ser mayor al saldo");
        let borrar = setTimeout(borrar_inputs,1000);

    } else if (aposta<=0 || aposta>12) {

        alert("La suma de los dados no puede ser mayor a 12 y menor o igual a 0");
        let borrar = setTimeout(borrar_inputs,1000);

    }else {

        ///si todo marcha bien se hacen las apuestas
        switch(aposta){

            case 7:
    
                impor_ganado= importAposta * 3;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            
            break;
    
            case 6: case 8:
    
                impor_ganado= importAposta * 5;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            break;
    
            case 5: case 9:
    
                impor_ganado= importAposta * 7;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            break;
    
            case 4: case 10:
    
                impor_ganado= importAposta * 10;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            break;
    
            case 3: case 11:
    
                impor_ganado= importAposta * 15;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            break;
    
            case 2: case 10:
    
                impor_ganado= importAposta * 30;
                document.getElementById('avis').innerHTML= mensaje(impor_ganado,importAposta,aposta);
                document.getElementById('saldo').placeholder = impor_ganado;
    
            break;
         
        }

        ///si el saldo es 0 es que ha perdido
        if(importAposta==0){

            document.getElementById('avis').innerHTML = "Has perdido :(";

        }
   
    }

}      
