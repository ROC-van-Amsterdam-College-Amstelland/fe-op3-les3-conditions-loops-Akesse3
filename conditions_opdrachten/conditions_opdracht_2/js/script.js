function checkSaldo(){
    var mySaldo=110;

    if(mySaldo<25){
       document.getElementById("mySaldo").innerHTML="Sorry, je hebt te weinig saldo!";
    }
    else if(mySaldo>100){
        document.getElementById("mySaldo").innerHTML="Je hebt voldoende saldo om € 25 op te nemen, je krijgt nu het geld. ";
    }
    else{
        document.getElementById("mySaldo").innerHTML="Je hebt voldoende saldo om € 25 op te nemen";
    }
}