function escrevaOla() {
    console.log("Olá mundo!")
}

escrevaOla()

function escrevaMenesagem(mensagem){
    console.log(mensagem)
}

escrevaMenesagem("Mensagem")

function somaTudo(array){
    var total = 0

    for (var num of array){
        total = total + num

    }

    return total
}
var array = [ 2, 3, 4, 5, 6, 7, 8, 9]
var teste = somaTudo(array)
console.log(teste)

function escreverEndereco(rua, cidade, pais, ...complemento){
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    for(var i=0; i < complemento.length; i++){
        console.log(complemento[i])
    }
}
escreverEndereco("Da faculdade", "Toledo", "Brasil", "Apto tal", "Cep tal", "Proximo a tal")

function funcCallBack(a , b, fnCb){
    return fnCb(a + b)
}

console.log(funcCallBack(1, 2, function(total){
        return total * 2;
}))