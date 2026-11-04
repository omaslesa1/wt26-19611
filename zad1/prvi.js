function procijeniCekanjeUKorisnika(vrijednost) {

    //manje od 5 je kratko
    if (vrijednost <= 5) {
        return "Kratko cekanje";
    }
    // manje od 15 i vece od 5 je umjereno
    if (vrijednost <= 15) {
        return "Umjereno cekanje";
    }
    // vece od 15 je dugo
    return "Dugo cekanje";
}

let unos = prompt("Unesite trajanje cekanja u minutama:");
let vrijednost = Number(unos);

if (unos === null || unos.trim() === "" || vrijednost < 0) {
    alert("Neispravan unos!");
}
else {
    alert(procijeniCekanjeUKorisnika(vrijednost));
}