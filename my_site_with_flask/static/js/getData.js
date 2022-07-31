function getData() {
    var dia_ano = new Date().toLocaleDateString()
    dia = dia_ano.split("/")[0];
    mes = dia_ano.split("/")[1];
    ano = dia_ano.split("/")[2];
    if (dia.length == 1){
        dia = "0" + dia;
    }
    if (mes.length == 1){
        mes = "0" + mes;
    }
    return (dia + "/" + mes + "/" + ano);
}