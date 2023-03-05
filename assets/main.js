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
    var imcFinal = `${imc.toFixed(5)}` * 10000

    if (res1 >= 199 || res2 >= 230){
      alert('Valores Inválidos. Tente novamente!')
    } else if (res1 <= 0 || res2 < 50){
        alert('Valores Inválidos. Tente novamente!')
    }else {
        resultado.innerHTML = `&#9989; Olá! Seu IMC é: ${imcFinal}<br>
        Confira na tabela abaixo a sua classificação. &#11015;`
        itemRes.style.background ="rgb(9 2 110)"
    }   
} 