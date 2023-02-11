var sendDados = document.getElementById('btn-enviar')

sendDados.addEventListener('click', calcular)

function calcular(){
    var btnkg = document.getElementById ('kg')
    var btnAlt = document.getElementById ('altura')
    var itemRes = document.getElementsByClassName('resultado')[0]
    var resultado = document.getElementById('msg-res')
    var res1 = Number(btnkg.value)
    var res2 = Number(btnAlt.value)
    var imc = res1 / (res2 * res2)
    var imcFinal = `${imc.toFixed(6)}` * 10000

    if (res1 >= 300 || res2 >= 230){
        itemRes.innerHTML = 'Valores Inválidos.<br>Tente novamente!'
        itemRes.style.color = 'white'
        itemRes.style.background = 'red'
    } else if (res1 <= 0 || res2 < 50){
        itemRes.innerHTML = 'Valores Inválidos.<br>Tente novamente!'
        itemRes.style.color = 'white'
        itemRes.style.background = 'red'
    }
    
    else {
        resultado.innerHTML = `Seu IMC é: ${imcFinal}<br>
        Confira na tabela abaixo a sua classificação.`
        itemRes.style.background ="rgb(9 2 110)"
    }   
} 