function napraviProfil() {
  let profil = { naziv: "Početni" };
  return {
    pregled: function () { return profil; },
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

const p = napraviProfil();
const dobijeni = p.pregled();
dobijeni.naziv = "Izmijenjeno izvana";
console.log(p.pregled().naziv);   


function napraviProfil2() {
  let profil = { naziv: "Početni", godina: 2024 };
  return {
    pregled: function () {
      return { naziv: profil.naziv, godina: profil.godina };   // novi objekat
    },
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

const p2 = napraviProfil2();
const kopija = p2.pregled();
kopija.naziv = "Izmijenjeno izvana";
kopija.godina = 1999;
console.log(p2.pregled());        // { naziv: 'Početni', godina: 2024 }
p2.postaviNaziv("Novi");
console.log(p2.pregled());        // { naziv: 'Novi', godina: 2024 }