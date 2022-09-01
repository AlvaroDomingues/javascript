function carregar(){
  var msg = document.getElementById('msg')
  var foto = document.getElementById('imagem')
  var hora = 10
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <= 12){
    msg.innerHTML =`Agora são ${hora} horas , BOM DIA!!`
    foto.src ='estilos/manha.png'
    document.body.style.background = 'rgb(22, 110, 243)'
  }
  else if( hora > 12 && hora <= 18){
    msg.innerHTML =`Agora são ${hora} horas , BOA TARDE!!`
    foto.src ='estilos/tarde.png'
    document.body.style.background = ' #f49e12'
  }
  else{
    msg.innerHTML =`Agora são ${hora} horas , BOA NOITE!!`
    foto.src ='estilos/noite.png'
    document.body.style.background = '#10111e'
  }
}