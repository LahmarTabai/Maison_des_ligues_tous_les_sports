document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    let btn = document.querySelectorAll(".toggle");
    let body = document.querySelector('body');
    let icoferm = '<i class="fas fa-times fermer" aria-hidden="true"></i>';
    let nav = document.querySelector('.gauche');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", e => {
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

    /*----------------------- Partie Identifiant -------------------------*/

    // const local = JSON.parse(localStorage.getItem("user"));
    // let tark = local.identifiant;
    // let ident = tark.substring(0, tark.indexOf('@'));

    // let res = document.getElementById("compte");


    const local = JSON.parse(localStorage.getItem("User"));
    let ident = local[0];

    let res = document.getElementById("compte");

    res.innerHTML = '<a href="#"><i class="fa fa-user" aria-hidden="true"></i>&nbsp; ' + `${ident}` + "</a>";

    /*----------------------- Partie Modale -------------------------*/

    let el, modal, closed, open_modal, closed_all;

    el = document.querySelectorAll(".list li");
    modal = document.querySelector(".parent-modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale img");

    /* property elements */

    open_modal = function () {
        console.log(this.dataset);
        /* les variables */
        let image = this.dataset.image;
        let title = this.dataset.title;
        let desc = this.dataset.description;
        let dates = this.dataset.dates;
        modal.classList.add("modale-active"); /* ajouter la classe active */
        /* sélectionner les sélecteurs html*/
        document.querySelector(".modale img").setAttribute("src", image);
        document.querySelector(".modale .desc h3").innerText = title;
        document.querySelector(".modale .desc p").innerHTML = `<strong>Déscription : </strong>${desc}`;
        document.querySelector(".modale .desc time").innerText = `Annee ${dates}`;
        document.querySelector(".modale .desc time").setAttribute("datetime", dates);
    };
    for (rows of el) {
        rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
});