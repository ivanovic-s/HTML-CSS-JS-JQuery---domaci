var imePrezime = $(".imePrezime");
var telefon = $(".telefon");
var mejl = $(".mejl");
var poruka = $(".poruka");
var kraj = $(".kraj");

$("button").click(function (e) {
  e.preventDefault();
  var tel = telefon.val();
  var mejlVrednost = mejl.val();
  //////////////////////////////////////////////

  if (imePrezime.val() === '' || telefon.val() === '' || mejl.val() === '' || poruka.val() === '') {
    alert("Sva polja moraju biti popunjena.");
  } else if (isNaN(tel)) {
    alert("Broj telefona nije ispravno unet.");
  } else if (mejlVrednost.indexOf("@") === -1 ||mejlVrednost.indexOf("@") === 0 ) {
    alert("Mejl adresa nije dobro uneta.");
  } else {
    kraj.show();
  }
});

if (window.innerWidth <= 500) {
    document.querySelector(".kontakt-container").style.backgroundColor = "#6de38c";
  }
