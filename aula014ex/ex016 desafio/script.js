function contar() {
  let inicio = document.querySelector('input#txti')
  let fim = document.querySelector('input#txtf')
  let passo = document.querySelector('input#txtp')

  if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
    alert('ERRO! Todos os campos devem ser preenchidos.')
  } else {
    let resultado = document.querySelector('div#res')
    resultado.innerHTML = "Contando..."

    let start = Number(inicio.value)
    let end = Number(fim.value)
    let step = Number(passo.value)

    if (step == 0) {
      alert('Passo não pode ser ZERO. Considerando PASSO como 1')
      step = 1
    }

    if (start < end) {
      for (let counter = start; counter < end; counter += step) {
        resultado.innerHTML += ` ${counter}`
      } 
    } else {
      for (let counter = start; counter > end; counter -= step) {
        resultado.innerHTML += ` ${counter}`
      }
    }
  }
}
