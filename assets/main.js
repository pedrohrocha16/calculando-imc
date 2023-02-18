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

    //check campos vazios, valores inválidos
    if (btnNome.value.length == 0 || btnkg.value.length == 0|| btnAlt.value.length == 0){
       resultado.innerHTML ='Impossível calcular, verifique se os campos estão preenchidos corretamente.'
    }
    if (res1 <= 30 || res2 < 130){
        alert('Valores inválidos! Por favor, verifique os dados.')
    }
    else {
        alert('ok')
    }
} 