function setProblemeActive(){
  document.getElementById("btn-probleme").className = "nav-item nav-item-active";
  document.getElementById("btn-challenges").className = "nav-item";
  document.getElementById("btn-profil").className = "nav-item";
}
function setChallengesActive(){
  document.getElementById("btn-probleme").className = "nav-item";
  document.getElementById("btn-challenges").className = "nav-item nav-item-active";
  document.getElementById("btn-profil").className = "nav-item";
}
function setProfilActive(){
  document.getElementById("btn-probleme").className = "nav-item";
  document.getElementById("btn-challenges").className = "nav-item";
  document.getElementById("btn-profil").className = "nav-item nav-item-active";
}
