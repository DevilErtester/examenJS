window.addEventListener('DOMContentLoaded',main);

function main(){
    
    let ultimaData = new Date();
    let myaniversari = new Date()
    let array_dates = new Array();

    let dia = ultimaData.getDate();
    let month = ultimaData.getMonth();
    let year = ultimaData.getFullYear();

    //modifico el dia/mes/año
    myaniversari.setDate(6);
    myaniversari.setMonth(3);
    myaniversari.setFullYear(2021);
    var dateArray = getDates(ultimaData, myaniversari);
    for (i = 0; i < dateArray.length; i ++ ) {
        
        document.getElementById('sortida').innerHTML+=" </br>"+dateArray[i];
    }
}
Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
   var dateArray = new Array();
   var currentDate = startDate;
   while (currentDate <= stopDate) {
     dateArray.push(currentDate)
     currentDate = currentDate.addDays(1);
   }
   return dateArray;
 }

