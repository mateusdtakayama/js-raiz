console.log("Programador a bordo")
var nome = 'Mateus Delai'
console.log(nome)

console.log("Teste".length)
console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.indexOf('teus'))
console.log(nome.replace('Mateus', 'Teste'))
console.log(nome.slice(3,6))

var teste = '      teste        '
console.log(teste)
console.log(teste.trim())

var array = [2, 13, 14, 24 , 22]
console.log(array[3])
var numRemovido = array.pop()
console.log("numero removido: ", numRemovido)
console.log(array.slice(0,3))
console.log(array.slice(2))
console.log(array.join("--"))
array.push("Teste")
console.log(array)
console.log(array.includes("Teste"))
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var resultado = arr1.concat(arr2).concat(["teste", "salve", "isso"])
console.log(resultado)
console.log([...arr1, ...arr2])
var usuario = ["Pedro", 20,"paraiba", 2001]
var [nome, idade, , ano ] = usuario
console.log(nome, idade, ano)