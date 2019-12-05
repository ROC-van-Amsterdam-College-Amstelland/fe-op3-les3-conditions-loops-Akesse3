function checkSaldo(){
    var mySaldo=110;

    if(mySaldo<25){
       document.getElementById("mySaldo").innerHTML="Sorry, je hebt te weinig saldo!";
    }
    else if(mySaldo>100){
        document.getElementById("mySaldo").innerHTML="U kan veel geld opnemen";
    }
    else{
        document.getElementById("mySaldo").innerHTML="U kan geld opnemen";
    }
}