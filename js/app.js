document.addEventListener("DOMContentLoaded", () => {

   /*-------------------- Partie Foire Aux Questions ----------------------- */

   let btn = document.querySelectorAll(".toggle");
   let res = document.querySelectorAll(".hidden");

   let icouvert = document.querySelectorAll("ouvrir");

   let icoferm = '<i class="fas fa-times fermer" aria-hidden="true"></i>';

   for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function (e) {

         res[i].classList.toggle("show");

         if (btn[i].innerHTML.match('<i class="fas fa-plus ouvrir" aria-hidden="true"></i>')) {
            btn[i].innerHTML = icoferm;
            for (let j = 0; j < i; j++) {
               if (j != i) {
                  btn[j].innerHTML = '<i class="fas fa-plus ouvrir" aria-hidden="true"></i>';
                  res[j].classList.remove("show");
               }
            }

            for (let k = btn.length; k > i; k--) {
               if (k != i) {
                  btn[k].innerHTML = '<i class="fas fa-plus ouvrir" aria-hidden="true"></i>';
                  res[k].classList.remove("show");
               }
            }
         } else if (btn[i].innerHTML.match('<i class="fas fa-times fermer" aria-hidden="true"></i>')) {
            btn[i].innerHTML = '<i class="fas fa-plus ouvrir" aria-hidden="true"></i>';
         }
      });
   };

   /*-------------------- Mail Validation input 1 ----------------------- */

   // Partie Mail1 :

   let validation = document.getElementById("but1");

   let mail = document.getElementById("mail1");
   let mail_m = document.getElementById("mail_manquant1");

   let mail_v = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   validation.addEventListener("click", mailMissing);

   function mailMissing(e) {
      if (mail_v.test(mail.value)) {
         mail_m.textContent = "";
         const user1 = {
            identifiant: mail.value
         };
         localStorage.setItem("user1", JSON.stringify(user1));
      } else {
         e.preventDefault();
         mail_m.textContent = "E-Mail manquant ou invalide !";
         localStorage.clear();
      }
   };

   /*-------------------- Mail Validation input 2 ----------------------- */

   // Partie Mail2 :

   let validation2 = document.getElementById("but2");

   let mail2 = document.getElementById("mail2");
   let mail2_m = document.getElementById("mail_manquant2");

   let mail2_v = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   validation2.addEventListener("click", mailMissing2);

   function mailMissing2(e) {
      if (mail2_v.test(mail2.value)) {
         mail2_m.textContent = "";
         const user2 = {
            identifiant: mail2.value
         };
         localStorage.setItem("user2", JSON.stringify(user2));
      } else {
         e.preventDefault();
         mail2_m.textContent = "E-Mail manquant ou invalide !";
         localStorage.clear();
      }
   };
});