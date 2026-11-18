
function dodajDva(broj) {
    return broj + 2;
}

// Testiranje funkcije dodajDva
console.log(dodajDva(1));    // treba vratiti 3
console.log(dodajDva(2));    // treba vratiti 4
console.log(dodajDva(10));   // treba vratiti 12

// Funkcija jednom koja prima callback funkciju
function jednom(callback) {
    let pozvan = false;
    let rezultat;
    
    return function(parametar) {
        if (!pozvan) {
            rezultat = callback(parametar);
            pozvan = true;
        }
        return rezultat;
    };
}

// Testiranje funkcije jednom
const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija(4));      // treba ispisati 6
console.log(jednomFunkcija(10));     // treba ispisati 6
console.log(jednomFunkcija(9001));   // treba ispisati 6
