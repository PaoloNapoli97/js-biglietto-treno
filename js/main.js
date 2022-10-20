const kilometer = Number( prompt("Inserisci quanti chilometri percorrerà il treno") );
console.log("Numero chilometri da percorrere: " , kilometer);

const age = Number ( prompt("Inserire la propria età") );
console.log("Età del passeggero: " , age);

let price = 0.21 * kilometer;

if( age < 18){
    price = price * ( (100 - 20) / 100);
}
else if( age > 65){
    price =  price * ( (100 - 40) / 100);
}
// else{
//     break;
// }


const pricefix = price.toFixed(2);
console.log("Costo biglietto: " , pricefix);
document.querySelector("h3").innerHTML = pricefix