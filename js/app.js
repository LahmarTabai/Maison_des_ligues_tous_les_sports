document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelectorAll(".toggle");
  let res = document.querySelectorAll(".hidden");

  let icouvert = document.querySelectorAll("ouvrir");

  let icoferm = '<i class="fas fa-times fermer" aria-hidden="true"></i>';

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {

      res[i].classList.toggle("show");

      if (btn[i].innerHTML.match('<i class="fas fa-plus ouvrir" aria-hidden="true"></i>')) {
        btn[i].innerHTML = icoferm;
      } else if (btn[i].innerHTML.match('<i class="fas fa-times fermer" aria-hidden="true"></i>')) {
        btn[i].innerHTML = '<i class="fas fa-plus ouvrir" aria-hidden="true"></i>';
      }
    });
  };
});