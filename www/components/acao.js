var valor1 = 0;
var valor2 = 0;
var operador = "";

//ADD NUMERO NO VISOR
$(document).on('click','.numero',function(){
    //VALOR A SER ADICIONADO
    var valor = this.value;
    //VALOR DO VISOR
    var visorValue = $("#visor").val();
    //ALTERA VALOR DO VISOR (VALOR DO VISOR + VALOR A SER ADICIONADO)
    $("#visor").val(visorValue + valor);
});

$(document).on('click','.operador',function(){
    //GRAVA VALOR DO VISOR NA VARIAVEL VALOR1
    valor1 = parseFloat($("#visor").val());
    //GRAVA OPERADOR A SER USADO NA VARIAVEL OPERADOR
    operador = this.value;
    //LIMPA VISOR
    $("#visor").val('');
});

$(document).on('click','#igual',function(){
    //GRAVA VALOR DO VISOR NA VARIAVEL VALOR2
    valor2 = parseFloat($("#visor").val());

    //VARIAVEL DO TIPO INT ONDE SERA GUARDADO O RESULTADO
    var resultado = 0;

    //VERIFICA OPERAÇÃO A SER FEITA
    switch(operador){
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        resultado = valor1 / valor2;
        break;
      case "^":
        var potencia = 0;
        resultado = valor1;
        for(var x = 1; x < valor2; x++){
          potencia = valor1;
          resultado = resultado * potencia;
        }
        break;
      case "%":
        resultado = (valor1 * valor2) / 100;
        break;
    }

    $("#visor").val(resultado);
});

$(document).on('click','#raiz',function(){
    //GRAVA VALOR DO VISOR NA VARIAVEL VALOR1
    valor1 = parseFloat($("#visor").val());
    //VARIAVEL ONDE FICARA O RESULTADO FINAL
    var resultado = 0;
    //CALCULA RAIZ QUADRADA DO VALOR1
    resultado = Math.sqrt(valor1);
    //EXIBE RESULTADO NO VISOR
    $("#visor").val(resultado);
});

//FUNÇÃO DE LIMPAR TUDO
  $(document).on('click','#C',function(){
      $("#visor").val("");
      valor1 = 0;
      valor2 = 0;
      operador = "";
  }); 

//FUNÇÃO DE LIMPAR UM
  $(document).on('click','#CE',function(){
      $("#visor").val("");
  }); 

//ADD PONTO
  $(document).on('click','#ponto',function(){
    var visor = $("#visor").val();
    
    if(visor == ""){
        $("#visor").val("0.");
    }
    else{
        if(visor.includes(".")){
            
        }else{
            $("#visor").val(visor + ".");
        }
    }
  });