function checkSaldo(){
    var mySaldo=500;

    if(mySaldo<25){
       document.getElementById("mySaldo").innerHTML="Sorry, je hebt te weinig saldo!";
    }
    else if(mySaldo>500){
        document.getElementById("mySaldo").innerHTML="Je hebt voldoende saldo om € 25 op te nemen, je krijgt nu het geld. ";
    }
    else{
        document.getElementById("mySaldo").innerHTML="Je hebt voldoende saldo om € 25 op te nemen";
    }
}