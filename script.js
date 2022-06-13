window.addEventListener("load", sidenVises);
//Start op_ned-animationer
document.querySelector("#portfolio_container").classList.add("op_ned");
document.querySelector("#navn_container").classList.add("op_ned");

function sidenVises() {
  console.log("sidenVises");
}
//Forsvind animationer
document.querySelector("#hjerte1_sprite").classList.add("forsvind");
document.querySelector("#hjerte2_sprite").classList.add("forsvind");
document.querySelector("#hjerte3_sprite").classList.add("forsvind");
