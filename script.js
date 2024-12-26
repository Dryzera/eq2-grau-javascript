const valorA = Number(prompt('Digite o valor de A'))
const valorB = Number(prompt('Digite o valor de B'))
const valorC = Number(prompt('Digite o valor de C'))
let flag_a_e_c;
let flag_b;

function verificaValores(a, b, c) {
    if (a < 0 || c < 0 ) {
        flag_a_e_c = true
    }
    if (b < 0) {
        flag_b = true
    }
    return {
        'a_c_negativo': flag_a_e_c, 
        'b_negativo': flag_b
    }
}

function calculaDelta(a, b, c){
    const valorVerificado = verificaValores(a, b, c)
    if (valorVerificado.b_negativo) {

    }

    const raizDelta = Math.sqrt(valorDelta)
    console.log(raizDelta)
    return raizDelta
}

function calculaValoresDeX(valorDelta) {
    console.log('oi')
}

calculaDelta(valorA, valorB, valorC)