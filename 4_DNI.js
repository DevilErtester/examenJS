window.addEventListener('DOMContentLoaded',main);

let novaF=null;
let contado_abierta = setInterval(reabir,1000); ///inicio un intervalo desde 1 segundo
let tiempo_cerrar = setTimeout(cerrar_finestra,30000); //cerrar luego de 30 segundos esto funciona
let abierta = 0; //lo uso para saber si la ventana a sido habierta


function main(){

    obrir.addEventListener('click',abrir_ventana);

}

function abrir_ventana() {

    if(novaF == null || novaF.closed){

        novaF =  window.open("4_DNI_NOVA.html","ventana1", "width=620,height=130");
        
        abierta=1; //signifa que la ventana se abrio
    
    }else{

        novaF.focus();
    
    }

}

function reabir(){

    /**
     * Los 2 primeros es para saber si ha sido cerrada.
     * el contado_abierta!=tiempo_cerrar no tiene que llegar a los 30 segundos
     * abierta == 1 significa que a sido habierta almenos 1 vez
     * eso hace que la ventana se vuelva a abrir
     */

    if((novaF == null || novaF.closed) && contado_abierta!=tiempo_cerrar && abierta == 1){

        novaF =  window.open("4_DNI_NOVA.html","ventana1", "width=620,height=130");
    
    }else{

        novaF.focus();
    
    }

}

function cerrar_finestra(){

	if (novaF!=null && !novaF.closed) {
        //cuando se cierra las ventanas limpios los contadores
        clearInterval(contado_abierta);
        clearTimeout(tiempo_cerrar);
		novaF.close();
    }
    
}

//nota para volver hacerlo funcionar hay que recargar la pagina una vez usada