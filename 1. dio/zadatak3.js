
function napraviResurs(pocetno) {
  let preostalo = 0;

  if (typeof pocetno === "number" && pocetno >= 0) {
    preostalo = pocetno;
  } // privatno

  return {
    potrosi: function (kolicina){
      if (typeof kolicina !== "number" || isNaN(kolicina) ||
          kolicina < 0 || kolicina > preostalo) {
        return false;            
      }
      preostalo -= kolicina;
      return true;                // uspjesna potrosnja
    },

    
    preostalo: function () { return preostalo; }
  };
}

const minute = napraviResurs(100);
const papir = napraviResurs(20);

console.log(minute.potrosi(30), minute.preostalo());   // true 70
console.log(papir.potrosi(5), papir.preostalo());      // true 15
console.log(minute.potrosi(500), minute.preostalo());  // false 70
console.log(papir.potrosi(-3), papir.preostalo());     // false 15
console.log(minute.preostalo(), papir.preostalo());    // 70 15 (nezavisne instance)