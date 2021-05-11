function upvoteUp(){
  if (this.className='upvote-button-wrapper'){
    this.className+='upvote-button-wrapper upvote-button-wrapper-clicked';
  }
  else {
    this.className+='upvote-button-wrapper';
  }

}
/*function upvoteUp(){
  var element = document.getElementsByTagName("button");
  if (this.class="upvote-button-wrapper"){
    console.log(this);
    this.classList.toggle("upvote-button-wrapper-clicked");
  }
}*/
