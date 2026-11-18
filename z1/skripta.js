// Selektori
const stavke = document.querySelectorAll("#lista li");
const sazetak = document.querySelector("#sazetak");
const resetDugme = document.querySelector("#reset");

// za stanje 
function postaviStanje(li, zavrsena) {
  li.classList.toggle("zavrsena", zavrsena);
  if (zavrsena) {
    li.querySelector(".status").textContent = "Završeno";
    li.querySelector(".promijeni").textContent = "Vrati u nezavršeno";
  } else {
    li.querySelector(".status").textContent = "Nije završeno";
    li.querySelector(".promijeni").textContent = "Označi kao završeno";
  }
}

// sazetak iz DOM-a
function osvjeziSazetak() {
  const brojZavrsenih = document.querySelectorAll("#lista li.zavrsena").length;
  sazetak.textContent = "Završeno: " + brojZavrsenih + " od " + stavke.length;
}

// pojedini klikovi
stavke.forEach(function (li) {
  li.addEventListener("click", function () {
    postaviStanje(li, !li.classList.contains("zavrsena"));
    osvjeziSazetak();
  });
});

// vracanje u pocetno
resetDugme.addEventListener("click", function () {
  stavke.forEach(function (li) {
    postaviStanje(li, false);
  });
  osvjeziSazetak();
});

osvjeziSazetak();