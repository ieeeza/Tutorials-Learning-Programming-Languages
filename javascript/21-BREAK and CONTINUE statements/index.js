for(let i = 1; i <= 20; i+= 1){
    if(i == 13){
        break; //O código vai parar assim que chegar na condição.
    }
    console.log(i);
}



for(let i = 1; i <= 20; i+= 1){
    if(i == 13){
        continue; //O código pular o valor da colocado na condição if acima.
    }
    console.log(i);
}
