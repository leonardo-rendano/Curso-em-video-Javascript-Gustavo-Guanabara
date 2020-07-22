function verificar() {
  var data = new Date()
  var ano = data.getFullYear()

  var formAno = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (formAno.value.length ==0 || Number(formAno.value) > ano) {
    alert('ERRO! Verifique os campos e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)

    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade <= 10) {
      //Criança
        img.setAttribute('src', 'menino.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovem-homem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'homem.png')
      } else {
        //Idoso
        img.setAttribute('src', 'senhor.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade <= 10) {
        //Criança
        img.setAttribute('src', 'menina.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'jovem-mulher.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'mulher.png')
        } else {
          //Idoso
          img.setAttribute('src', 'senhora.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
  }
  
}