$(document).on('click','.numero',function(){
    var valor = this.value;
    var visorValue = $("#visor").val();
    $("#visor").val(visorValue + valor);
});