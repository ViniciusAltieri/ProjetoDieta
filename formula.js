function calcular(){
    var idade = Number(document.getElementById('idade').value)
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var res = document.getElementById('res')

    var slt = document.getElementById('treino').value
    var value = slt.options[slt.selectedIndex].value

    if(document.getElementById('feminino').checked){
        var sexo = 'feminino'
    }else if(document.getElementById('masc').checked){
        var sexo = 'masculino'
    }else{
        alert('É necessário informar o sexo!')
    }

    if(idade <= 0 || idade > 100){
        alert('Informações inválidas')
    }else if(altura <= 0 || altura > 300){
        alert('Informações inválidas')
    }else if(peso <= 0 || peso > 600){
        alert('Informações inválidas')
    }else{
        if(sexo == 'masculino'){
            var TMB = [66 + (13.8 * peso) + (5.0 * altura) - (6.8 * idade)] * value
        }else{
            var TMB =  [655 + (9.6 * peso) + (1.9 * altura) - (4.7 * idade)] * value
        }

        var arredondando = Math.round(TMB)
        res.innerHTML = `Seu gasto calórico diário é de ${arredondando} KCAL`
    }


    

    
}