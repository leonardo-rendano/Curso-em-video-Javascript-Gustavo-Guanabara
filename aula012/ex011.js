var idade = 22

console.log(`Você tem ${idade} anos.`)

if(idade < 16) { //SE a idade for menor que 16, então não vota
  console.log('Não vota!')
} else if (idade < 18 || idade > 65) { //SENÃO, SE a idade for menor que 18 e maior que 16 ou maior que 65, voto facultativo
  console.log('Voto facultativo.')
} else { //SENÃO, voto obrigatório
  console.log('Voto obrigatório!')
}