document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelectorAll(".toggle");
    let body = document.querySelector('body');
    let icoferm = '<i class="fas fa-times fermer" aria-hidden="true"></i>';
    let nav = document.querySelector('.gauche');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            if (btn[i].innerHTML.match('<i class="fas fa-bars ouvrir" aria-hidden="true"></i>')) {
                btn[i].innerHTML = icoferm;
                nav.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            } else if (btn[i].innerHTML.match('<i class="fas fa-times fermer" aria-hidden="true"></i>')) {
                btn[i].innerHTML = '<i class="fas fa-bars ouvrir" aria-hidden="true"></i>';
                nav.style.background = "";
            }
            body.classList.toggle("open");
        });
    };
});