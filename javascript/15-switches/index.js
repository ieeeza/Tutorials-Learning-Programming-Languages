let grade = "A";

switch(grade) {
    case "A":
        console.log("Muito bem!!");
        break;
    case "B":
        console.log("Boa");
        break;
    case "C":
        console.log("okay");
        break;
    case "D":
        console.log("Quase");
        break;
    case "F":
        console.log("Falhou");
        break;
    default:        
        console.log("Insira uma nota válida!!", grade, "não é uma.");
}

let grade2 = 59;
 
switch(true) {
    case grade2 >= 90:
        console.log("Muito bem!!");
        break;
    case grade2 >= 80:
        console.log("Boa");
        break;
    case grade2 >= 70:
        console.log("okay");
        break;
    case grade2 >= 60:
        console.log("Quase");
        break;
    case grade2 < 60:
        console.log("Falhou");
        break;
    default:        
        console.log("Insira uma nota válida!!", grade, "não é uma.");
}