function imc(){
    //recupero los valores de html
    let peso=document.getElementById("peso").value
    let estatura=document.getElementById("estatura").value
    let resultado=parseFloat(peso) / (parseFloat(estatura)*parseFloat(estatura))
    if(resultado>0 && resultado<18.5){
        alert("BAJO PESO")
    } else {
        if(resultado>=18.5 && resultado<=24.9){
            alert("PESO NORMAL")
        }else {
            if(resultado>=25 && resultado<=29.9){
                alert("SOBREPESO")
            }else{
                if(resultado<=35.0){
                    alert("obesidad extrema ")
                }
            }
        }
    }  
}