// elementi forme
const forma = document.querySelector("#forma");
const naslovUnos = document.querySelector("#naslov");
const tekstUnos = document.querySelector("#tekst");
const greska = document.querySelector("#greska");
const resetDugme = document.querySelector("#vrati-dugme");

// postojeci el pregleda
const pregled = document.querySelector("#pregled");
const pregledNaslov = document.querySelector("#pregled-naslov");
const pregledTekst = document.querySelector("#pregled-tekst");
const pregledOznaka = document.querySelector("#pregled-oznaka");

const kategorije = {
  informacija: "Informacija",
  upozorenje: "Upozorenje"
};

function prikaziGresku(poruka) {
  greska.textContent = poruka;
  greska.hidden = false;
}

function ocistiGresku() {
  greska.textContent = "";
  greska.hidden = true;
}

forma.addEventListener("submit", function (e) {
  e.preventDefault();

  const naslov = naslovUnos.value.trim();
  const tekst = tekstUnos.value.trim();
  const odabrana = forma.querySelector('input[name="kategorija"]:checked');

  // prvo sve provjeri
  if (naslov === "" && tekst === "") {
    prikaziGresku("Naslov i tekst obavijesti ne smiju biti prazni.");
    return;
  }
  if (naslov === "") {
    prikaziGresku("Naslov ne smije biti prazan.");
    return;
  }
  if (tekst === "") {
    prikaziGresku("Tekst obavijesti ne smije biti prazan.");
    return;
  }
  if (!odabrana || !(odabrana.value in kategorije)) {
    prikaziGresku("Odaberite kategoriju.");
    return;
  }

  // kad je sve ispravno prikazujemo obavijest
  ocistiGresku();
  pregledNaslov.textContent = naslov;
  pregledTekst.textContent = tekst;
  pregledOznaka.textContent = kategorije[odabrana.value];
  pregledOznaka.hidden = false;
  pregled.classList.remove("informacija", "upozorenje");
  pregled.classList.add(odabrana.value);
});

// vracanje forme u prethodno stanje
resetDugme.addEventListener("click", function () {
  forma.reset();
  ocistiGresku();
  naslovUnos.focus();
});