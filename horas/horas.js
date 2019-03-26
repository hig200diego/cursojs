
switch(new Date().getDay()) {
    case 0:
    day = "Sunday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;

    case 1:
    day = "Monday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;

    case 2:
    day = "Tuesday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;

    case 3:
    day = "Wednesday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;

    case 4:
    day = "Thursday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;
    
    case 5:
    day = "Friday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;
    
    case 6:
    day = "Saturday";
    document.getElementById("mostra-dia-semana").innerHTML = day;
    break;

    default:
    mensagem = "Looking forward to the Weekend";


}


function horario() {
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    var segundos = new Date().getSeconds();

    exibir = hora+ ":" +minutos+ ":" +segundos;
    document.getElementById("exibir-saudacao").innerHTML = exibir;
}

setInterval("horario()", 1000);



