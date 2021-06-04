function getDate(){

    alert("I am an alert box!");

    var DateNoFormat = document.getElementById("challengeDate").value;

    var year = DateNoFormat.slice(0,4);
    var month = DateNoFormat.slice(5,7);
    var day = DateNoFormat.slice(8,10);

    var formatedDate = day+"."+month+"."+year
    
    console.log(formatedDate);

    //document.getElementById("challengeDate").value = formatedDate;
    return formatedDate;

}

