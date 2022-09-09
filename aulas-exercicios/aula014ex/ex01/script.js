window.alert('Olá, Mundo')
function contar(){
  let ini = window.document.getElementById('txtinicio')
  let fim = window.document.getElementById('txtfim')
  let passo = window.document.getElementById('txtpasso')
  let res = window.document.getElementById('res')
  let i = Number(ini.value)
  let f = Number(fim.value)
  let p = Number(passo.value)
    for(let c = i; c <= f; c += p){
      res.innerHTML += `${c} `
      
  }

}