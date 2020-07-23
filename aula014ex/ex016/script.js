function contar() {
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')

  let resultado = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('ERRO! Todos os campos devem ser preenchidos.')
  } else {
    resultado.innerHTML = 'Contando...'

    let start = Number(inicio.value)
    let end = Number(fim.value)
    let step = Number(passo.value)

    for (let count = start; count <= end; count += step) {
      resultado.innerHTML += ` ${count}` 
    }
  }
}















// O contador (count) vai começar no inicio (start)
// Enquanto o contador (count) for menor ou igual ao fim (end)
// O contador (count) vai receber ele mesmo (count) + o passo (step)