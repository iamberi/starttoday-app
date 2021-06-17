// Challenge Teilnehmen
function teilnehmen(){
    var status = document.getElementById("teilnehmen-popup")
    status.className = "popover-wrapper-visible";

  }

  function closeTeilnehmen(){
    var status = document.getElementById("teilnehmen-popup")
    status.className = "popover-wrapper";

  }

  function sendMail(){
    var mail = document.getElementById("contactemail").innerHTML;
    var mailto="mailto:" +mail;

    var button = document.getElementById("sendTeilnehmenMail");
    
    button.href=mailto;
  }


// Verifizierung
  function verifizieren(){
    var status = document.getElementById("verfizierung-popup")
    status.className = "popover-wrapper-visible";
  }

  function CloseVerifizieren(){
    var status = document.getElementById("verfizierung-popup")
    status.className = "popover-wrapper";
  }


// Lösung einreichen
  function Solution() {
    var status = document.getElementById("solution-popup")
    status.className = "popover-wrapper-visible";
  }

  function closeSolution(){
    var status = document.getElementById("solution-popup")
    status.className = "popover-wrapper";
  }

// Erklärung Social Points
function openExplainSocialPoints() {
  var status = document.getElementById("socialpoints-popup")
  status.className = "popover-wrapper-visible";
}

function closeExplainSocialPoints(){
  var status = document.getElementById("socialpoints-popup")
  status.className = "popover-wrapper";
}
