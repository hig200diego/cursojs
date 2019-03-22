

function horario() {
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    var segundos = new Date().getSeconds();

    exibir = hora+ ":" +minutos+ ":" +segundos;
    document.getElementById("exibir-saudacao").innerHTML = exibir;
}

setInterval("horario()", 1000);



