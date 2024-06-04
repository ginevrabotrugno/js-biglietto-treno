// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
let chilometriViaggio = parseInt(prompt ("Inserisci il numero di chilometri da percorrere"));

console.log("numero chilometri: ", chilometriViaggio);

// e l’età del passeggero.
let etaPasseggero = parseInt(prompt ("Inserisci la tua età"));

console.log("età passeggero: ", etaPasseggero);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let prezzoBiglietto = chilometriViaggio * 0.21;

console.log("prezzo biglietto: €", prezzoBiglietto);



// va applicato uno sconto del 20% per gli under 18


// va applicato uno sconto del 40% per gli over 65








    

    

    



// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).