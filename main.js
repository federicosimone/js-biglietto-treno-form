// Dati di input 
const button = document.querySelector('#button');
const chilomUt = document.querySelector('#km');
const confButton = document.getElementById("confirm")
//const age = document.querySelector('#age');
const age = document.getElementById("etaUt") ;
//riferimento pagine
const nameField= document.getElementById("nameUt") ;
const distField= document.getElementById("km") ;
const ageField = document.getElementById("etaUt") ;
const abbUtField= document.getElementById("abbonamento");
//riferimento da scrivere
const nameReport= document.getElementById("nomeUtente");
const distReport= document.getElementById("tratta");
const ageReport= document.getElementById("fasciaEta") ;
const abbUtReport= document.getElementById("numeroAbb")



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
    if (eta == "Minorenne") {
        finalPrice = price - (price / 100) *20 ;
    } else if (eta == "Maggiorenne" ){
        finalPrice = price ;   
    } else if ( eta == "Pensionato") {
        finalPrice = price - (price/100) * 40 ;
    }
    nameReport.innerText = nameField.value ;
    distReport.innerText = `${distField.value} Km ` ;
    ageReport.innerText= ageField.value;
    abbUtReport.innerText= abbUtField.value;

    
    console.log(finalPrice)
    document.querySelector("#prezzoFinale").innerText= `€ ${finalPrice.toFixed(2)}` ;
})






