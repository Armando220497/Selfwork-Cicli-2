console.log("Numeri pari da 0 a 20:");

// Stampa i numeri pari da 0 a 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

console.log("Numeri dispari da 0 a 20:");

let sumDispari = 0; //  somma dei numeri dispari
let countDispari = 0; // "numero" dei numeri dispari


for (let i = 1; i <= 20; i += 2) {
    console.log(i);
    sumDispari += i; // aggiunge il numero dispari alla somma
    countDispari++; // Incrementa di 1 il numero dei "numeri" dispari
}

//media dei numeri dispari
let mediaDispari = sumDispari / countDispari;

console.log("Media dei numeri dispari da 1 a 20:", mediaDispari);
