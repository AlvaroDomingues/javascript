  


function calcular(){
  var nasc = document.getElementById('txtdate')
  
  var res = document.getElementById('res')
  data = new Date()
  atual = data.getFullYear()
  if (nasc.value == 0 || nasc.value > atual){
    res.innerHTML ='[ERRO] Verifique os dados e tente novamente!!'
  } else {
    var sexo = document.getElementsByName('txtsx')
    var idade = atual - Number(nasc.value)
    var genero = ''
    if (sexo[0].checked){
      genero = 'Homem'
    }
    else{
      genero = 'Mulher'
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  }
  
  
}