window.addEventListener('DOMContentLoaded',main);

function main(){
    
    let hoy = new Date();
    let myaniversari = new Date()
    let array_dates = new Array();

    hoy.getDate();
    hoy.getMonth();
    hoy.getFullYear();

    //modifico el dia/mes/año
    myaniversari.setDate(17);
    myaniversari.setMonth(8);
    myaniversari.setFullYear(2021);

    var difM = hoy - myaniversari // diferencia en milisegundos
    var difD = difM / (1000 * 60 * 60 * 24) // diferencia en dias
    

    alert(difD);
   
        
    
}