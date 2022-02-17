document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelectorAll(".toggle");
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let icoferm = '<i class="fas fa-times fermer"></i>';

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            if (btn[i].innerHTML.match('<i class="fas fa-bars ouvrir"></i>')) {
                btn[i].innerHTML = icoferm;
                header.style.background = "#000";
            } else if (btn[i].innerHTML.match('<i class="fas fa-times fermer"></i>')) {
                btn[i].innerHTML = '<i class="fas fa-bars ouvrir"></i>';
                header.style.background = "";
            }
            body.classList.toggle("open");
        });
    };
});