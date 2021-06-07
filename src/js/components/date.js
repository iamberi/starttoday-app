function getDate(){

    var DateNoFormat = document.getElementById("challengeDate").value;

    var year = DateNoFormat.slice(0,4);
    var month = DateNoFormat.slice(5,7);
    var day = DateNoFormat.slice(8,10);

    var formatedDate = day+"."+month+"."+year
    
    console.log(formatedDate);
    document.getElementById("challengeDate").value = formatedDate;
    //document.getElementById("challengeDate").value = formatedDate;
    return formatedDate;

}

function getCategory(){
    var category = document.getElementById("category-card").innerHTML;
    console.log(category);
}
