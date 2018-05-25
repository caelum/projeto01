var tempo
function formataRelogio(){
    var tempoEmHorasFloat = tempo/60
    var horas = parseInt(tempoEmHorasFloat)
    var minutos = parseInt((tempoEmHorasFloat - horas) * 60)
    return horas + ":" + minutos
}