function calculadoraEqSegundoGrau() {

    const botaoNovaConta = document.querySelector('.nova-conta')

    botaoNovaConta.addEventListener('click', function() {
        location.reload()
    })

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

    function verificaDelta(a, b, c){
        const valorVerificado = verificaValores(a, b, c)
        const ladoEsquerdo = !valorVerificado.b_negativo ? 0-b**2 : b**2
        const ladoDireito = valorVerificado.a_c_negativo ? - (4 * a * c) : + (4 * a * c)
        return {
            'ladoEsquerdo': ladoEsquerdo,
            'ladoDireito': ladoDireito,
        }
    }

    function calculaDelta(ladoEsquerdo, ladoDireito) {
        const valorDelta = ladoEsquerdo + ladoDireito

        const raizDelta = Math.sqrt(valorDelta)

        if (!raizDelta) return mostraResultado(false)
        return raizDelta
    }

    function calculaValoresDeX(valorDelta, a, b) {
        const conjuntoSolucao = []
        let i = 0
        while (i < 3) {
            if (valorDelta !== 0) {
                if (i === 1) {
                    let valorDeX = (-b + valorDelta) / (2 * a)
                    conjuntoSolucao.push(valorDeX)
                } else if (i === 2) {
                    let valorDeX = (-b - valorDelta) / (2 * a)
                    conjuntoSolucao.push(valorDeX)
                }
            } else {
                let valorDeX = (-b + valorDelta) / (2 * a)
                conjuntoSolucao.push(valorDeX)
                i = 3
            }
            i++
        }
        return conjuntoSolucao
    }

    function mostraResultado(conjuntoSolucao) {
        const p = document.querySelector('.resultado')
        if (conjuntoSolucao) {
            template = `O resultado para os valores a=${valorA}, b=${valorB} e c=${valorC} foi:
                ${conjuntoSolucao}
            `
            p.innerText = template
        } else {
            template = `Não há resultados válidos para os valores: a=${valorA}, b=${valorB} e c=${valorC}`
        p.innerText = template
        }
    }

    const ladosEquacao = verificaDelta(valorA, valorB, valorC)
    const raizDelta = calculaDelta(ladosEquacao.ladoEsquerdo, ladosEquacao.ladoDireito)
    const conjuntoSolucao = calculaValoresDeX(raizDelta, valorA, valorB)
    mostraResultado(conjuntoSolucao)
}
calculadoraEqSegundoGrau()