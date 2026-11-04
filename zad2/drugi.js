function generisiPlan(n, k) {

    for (let i = 1; i <= n; i++) {

        console.log("Ponavljanje " + i);

        if (i % k === 0 && i < n) {
            console.log("PAUZA!");
        }

    }

}

let unosN = prompt("Unesite ukupan broj ponavljanja:");
let unosK = prompt("Unesite nakon koliko ponavljanja ide pauza:");

let n = Number(unosN);
let k = Number(unosK);

if (unosN === null || unosK === null ||
    unosN.trim() === "" || unosK.trim() === "" ||
    !Number.isInteger(n) || !Number.isInteger(k) ||
    n <= 0 || k <= 0) {

    console.log("Neispravan unos!");

}
else {
    generisiPlan(n, k);
}