document.addEventListener("DOMContentLoaded", () => {

  /*-------------------- Recupération du 1er mail ----------------------- */
  const local1 = JSON.parse(localStorage.getItem("user1"));

  let res1 = document.getElementById("mail");

  res1.value = `${local1.identifiant}`;

  /*-------------------- Recupération du 2em mail ----------------------- */
  const local2 = JSON.parse(localStorage.getItem("user2"));

  let res2 = document.getElementById("mail");

  res2.value = `${local2.identifiant}`;
});