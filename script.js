// @ts-nocheck
function Converter(){
    let valor=document.querySelector('#valor')
    let informacao=Number(valor.value)
    let valorEmReais=informacao*5
    let resultado=document.querySelector("#valorConvertido").innerHTML=` O Resultado R$ ${valorEmReais} reais`
    console.log(valorEmReais)
  }
  function ConverterDolar(){
    let valor=document.querySelector('#valor')
    let informacao=Number(valor.value)
    let valorEmReais=informacao*0.19
    let resultado=document.querySelector("#valorConvertido").innerHTML=` O Resultado U$ ${valorEmReais} reais`
    console.log(valorEmReais)
  }
  
  function ConverterBitcon(){
     let valor=document.querySelector('#valor')
    let informacao=Number(valor.value)
    let valorEmReais=informacao*99.725_76
    let resultado=document.querySelector("#valorConvertido").innerHTML=` O Resultado BITCON ${valorEmReais} bitcon`
    console.log(valorEmReais)
  }
  
  
  
  
  