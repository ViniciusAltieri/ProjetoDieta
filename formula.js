function calcular(){
    var idade = Number(document.getElementById('idade').value)
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var res = document.getElementById('res')
    var button = document.getElementById('submit')
    
    var slt = document.getElementById('treino')
    var value = slt.options[slt.selectedIndex].value 
    
    if(document.getElementById('feminino').checked){
        var sexo = 'feminino'
    }else if(document.getElementById('masc').checked){
        var sexo = 'masculino'
    }else{
        alert('É necessário informar o sexo!')
    }
    
    if(idade <= 0 || idade > 100 || altura <= 0 || altura > 300 || peso <= 0 || peso > 600){
        alert('Informações inválidas')
    }else{
        if(sexo == 'masculino'){
            var TMB = [66 + (13.8 * peso) + (5.0 * altura) - (6.8 * idade)] * value
        }else{
            var TMB =  [655 + (9.6 * peso) + (1.9 * altura) - (4.7 * idade)] * value
        }
        
        var arredondando = Math.round(TMB)
        res.innerHTML = `${arredondando} Kcal/Dia`
        
        res.style.color = 'Green'
        res.style.fontSize = '22pt'
        res.style.textAlign = 'center'
        res.style.fontWeight = '700'
        
        const btn = document.createElement('button')
        const btntxt = document.createTextNode('Avançar')
        btn.appendChild(btntxt) 
        document.getElementById('calcular').appendChild(btn)
        
        btn.style.padding = '10px 16px'
        btn.style.width = '100%'
        btn.style.backgroundColor = 'green'
        btn.style.opacity = '0.8'
        btn.style.borderRadius = '4px'
        btn.style.fontSize = '18px'
        btn.style.color = 'white'
        btn.style.border = 'none'
        btn.style.cursor = 'pointer'
        btn.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.226)'
        btn.style.fontWeight = 'bold'

        button.style.cursor = 'not-allowed'
        button.style.opacity = '0.5'

        btn.addEventListener('click', function() {
            location.href = "file:///home/vinicius/Downloads/index.html";
        })

        
        if(calcular.length){
        }else{
            calcular = null
        }

    }
}



