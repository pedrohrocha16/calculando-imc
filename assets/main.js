var sendDados = document.getElementById('btn-enviar')

sendDados.addEventListener('click', calcular)

function calcular(){
    var btnNome = document.getElementById ('nome')
    var btnkg = document.getElementById ('kg')
    var btnAlt = document.getElementById ('altura')
    var itemRes = document.getElementsByClassName('resultado')[0]
    var resultado = document.getElementById('msg-res')
    var res0 = String(btnNome.value)
    var res1 = Number(btnkg.value)
    var res2 = Number(btnAlt.value)
    var imc = res1 / (res2 * res2)
    var imcFinal = `${imc.toFixed(5)}` * 10000

    if (res1 <= 45 || res2 <= 145){
        resultado.innerHTML = `Valores inválidos, corrija-os e tente novamente.<br>
         Valores mínimos para cálculo:<br>
         Peso em kg: 45*<br>
         Altura em cm: 145*`
    }
    if (res1 >= 200 || res2 >= 240){
        resultado.innerHTML = `Valores excedidos! Corrija-os e tente novamente.`
    } else {
        resultado.innerHTML = `&#9989; Olá ${res0}! Seu IMC é: ${imcFinal}<br>
        Confira na tabela abaixo a sua classificação. &#11015;`
        itemRes.style.background ="rgb(9 2 110)"
    }   
} 