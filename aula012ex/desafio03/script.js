function verificar() {
  let data = new Date()
  let ano = data.getFullYear()

  let formAno = document.getElementById('txtano')
  let resultado = document.getElementById('res')

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    alert('ERRO! Preencha todos os campos.')
  } else {
    let formSex = document.getElementsByName('inputSex')
    let idade = ano - Number(formAno.value)

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    let genero = ''

    if(formSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'menino.png')
      } else if (idade <= 21) {
        img.setAttribute('src', 'jovem-homem.png')
      } else if (idade <= 50) {
        img.setAttribute('src', 'homem.png') 
      } else {
        img.setAttribute('src', 'senhor.png')
      }
    }

    if(formSex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'menina.png')
      } else if (idade <= 21) {
        img.setAttribute('src', 'jovem-mulher.png')
      } else if (idade <= 50) {
        img.setAttribute('src', 'mulher.png')
      } else {
        img.setAttribute('src', 'senhora.png')
      }
    }

    resultado.style.textAlign = "center"
    resultado.innerHTML = `Detectamos ${genero} de ${idade} anos`
    resultado.appendChild(img)
    
  }
}