const forma = document.querySelector("#forma");
const nazivUnos = document.querySelector("#naziv");
const iznosUnos = document.querySelector("#iznos");
const greska = document.querySelector("#greska");
const tbody = document.querySelector("#tabela tbody");
const zbirCelija = document.querySelector("#zbir");
const brojElement = document.querySelector("#broj");

// formatiranje i parsiranje iznosa
function formatiraj(centi) {
  return (centi / 100).toFixed(2).replace(".", ",") + " KM";
}

// Pretvara unos u feninge ili vraća null ako unos nije ispravan broj
function parsirajIznos(tekst) {
  const t = tekst.trim().replace(",", ".");
  if (!/^\d{1,9}(\.\d{1,2})?$/.test(t)) return null; // odbija negativne, slova, prazno, 3+ decimale
  return Math.round(parseFloat(t) * 100);
}

// Zbir se UVIJEK računa ponovo iz redova tabele (tabela je jedini izvor istine),
// pa se ne može razići s onim što korisnik vidi.
function osvjeziZbir() {
  let zbir = 0;
  for (const red of tbody.rows) {
    zbir += Number(red.cells[1].dataset.centi);
  }
  zbirCelija.textContent = formatiraj(zbir);
  brojElement.textContent = tbody.rows.length;
}

function prikaziGresku(poruka) {
  greska.textContent = poruka;
  greska.hidden = false;
}

forma.addEventListener("submit", function (e) {
  e.preventDefault();

  const naziv = nazivUnos.value.trim();
  const sirovIznos = iznosUnos.value.trim();
  const centi = parsirajIznos(sirovIznos);

  // Sve se provjerava prije bilo kakve promjene tabele
  const problemi = [];
  if (naziv === "") problemi.push("Naziv ne smije biti prazan.");
  if (sirovIznos === "") {
    problemi.push("Unesite iznos.");
  } else if (sirovIznos.startsWith("-")) {
    problemi.push("Iznos ne smije biti negativan.");
  } else if (centi === null) {
    problemi.push("Iznos mora biti broj s najviše dvije decimale.");
  }

  if (problemi.length > 0) {
    prikaziGresku(problemi.join(" "));
    return; // tabela i uneseni podaci ostaju netaknuti
  }

  // Ispravan unos: insertRow(-1) na tbody dodaje red na kraj tijela,
  // dakle neposredno prije reda sa zbirom koji je u tfoot
  const red = tbody.insertRow(-1);
  red.insertCell().textContent = naziv;
  const celijaIznos = red.insertCell();
  celijaIznos.textContent = formatiraj(centi);
  celijaIznos.className = "iznos";
  celijaIznos.dataset.centi = centi;

  osvjeziZbir();

  greska.textContent = "";
  greska.hidden = true;
  forma.reset();
  nazivUnos.focus();
});

osvjeziZbir();