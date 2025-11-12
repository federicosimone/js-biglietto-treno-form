// Dati di input 
const button = document.querySelector('#button');
const chilomUt = document.querySelector('#km');
//const age = document.querySelector('#age');
const age = document.getElementById("etaUt") ;
//riferimento pagine
const nameField= document.getElementById("nameUt") ;
//riferimento da scrivere
const nameReport= document.getElementById("nomeUtente")



// Elaborazione
button.addEventListener("click", function(event) {
    event.preventDefault();
}) ;



/*button.addEventListener("click", function(){
    let finalPrice = null ;
    let km = parseInt(chilomUt.value) ;
    const eta = parseInt(age.value);
    let price = km * 0.21 ;
    //debugger
    if (eta < 18) {
        finalPrice = price - (price / 100) *20 ;
    } else if (eta >= 18 && eta < 65 ){
        finalPrice = price ;   
    } else if ( eta >= 65) {
        finalPrice = price - (price/100) * 40 ;
    }
    console.log(finalPrice)
}) */

button.addEventListener("click", function () {
    let finalPrice = null ;
    let km = parseInt(chilomUt.value) ;
    const eta = age.value;
    let price = km * 0.21 ;
    //debugger
    if (eta == "minorenne") {
        finalPrice = price - (price / 100) *20 ;
    } else if (eta == "maggiorenne" ){
        finalPrice = price ;   
    } else if ( eta == "pensionato") {
        finalPrice = price - (price/100) * 40 ;
    }
    nameReport.innerText = nameField.value ;
    console.log(finalPrice)
    document.querySelector("#prezzoFinale").innerText= `Il prezzo finale è € ${finalPrice}` ;
})



