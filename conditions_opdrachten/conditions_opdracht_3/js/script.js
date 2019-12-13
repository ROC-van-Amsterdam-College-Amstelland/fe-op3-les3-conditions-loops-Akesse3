function checkSaldo(){
    var mySaldo=5080;

    if(mySaldo<500){
       document.getElementById("mySaldo").innerHTML="Sorry, je hebt te weinig saldo!";
    }
    else if(mySaldo>500){
        document.getElementById("mySaldo").innerHTML="U heeft salaris en een bonus ontvangen. ";
    }
    else{
        document.getElementById("mySaldo").innerHTML="U heeft salaris gekregen.";
    }
}