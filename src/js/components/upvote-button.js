/*
var upvoteButton = document.querySelector('.upvote-button-wrapper') // Using a class instead, see note below.
upvoteButton.classList.toggle('upvote-button-wrapper-clicked');
var count = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.backgroundColor = "#FFFFFF"
        count = 1;
    }
    else {
        property.style.backgroundColor = "#7FFF00"
        count = 0;
    }
}*/

function upvoteUp(){
  div =  document.getElementById("upvote-button");
  if (div.attr('class') == 'upvote-button-wrapper') {

    div.removeClass('upvote-button-wrapper').addClass('upvote-button-wrapper-clicked');
  } else {
    div.removeClass('upvote-button-wrapper-clicked').addClass('upvote-button-wrapper');
  }
}


/*
function upvoteUp(){
  document.getElementById("upvote-button").className = "upvote-button-wrapper upvote-button-wrapper-clicked";
  document.getElementById("upvote-button").onclick = upvoteDown();
}


function upvoteDown(){
  document.getElementById("upvote-button").className = "upvote-button-wrapper upvote-button-wrapper-clicked";
}*/
