/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//Fase 1 creare le due variabili (età passeggero e chilometri da percorrere)

let numeroChilometri = prompt("Quanti chilometri vuoi percorrere?"); 
/*if(isNaN (numeroChilometri)) {
    console.log (`è una stringa`)
    let numeroChilometri = prompt("Quanti chilometri vuoi percorrere?");
} else {
    console.log (`non è una stringa`)
}*/
let numeroEtà = prompt("Quanti anni hai?") ;
const prezzoBigliettoAlChilometro= 0.21;

//Fase 2 Elaborazione dei dati e output: calcolare il prezzo totale del viaggio in base ai chilometri e all'età

let prezzoBase = numeroChilometri * prezzoBigliettoAlChilometro;
let prezzoPerMinorenni = numeroChilometri * prezzoBigliettoAlChilometro * (1-0.2);
let prezzoPerOver65 = numeroChilometri * prezzoBigliettoAlChilometro * (1-0.4); 

if (numeroEtà < 18) {
    console.log (`il prezzo totale del tuo viaggio è di: €`, prezzoPerMinorenni.toFixed(2));
} else if (numeroEtà >= 65) {
    console.log (`il prezzo totale del tuo viaggio è di: €`, prezzoPerOver65.toFixed(2) );
} else {
    console.log (`il prezzo totale del tuo viaggio è di: €`, prezzoBase.toFixed(2) );
}
