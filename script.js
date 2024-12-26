function calculadoraEqSegundoGrau() {

    const botaoNovaConta = document.querySelector('.nova-conta')
    const p = document.querySelector('.resultado')

    botaoNovaConta.addEventListener('click', function() {
        location.reload()
    })
    
    const valorA = Number(prompt('Digite o valor de A'))
    const valorB = Number(prompt('Digite o valor de B'))
    const valorC = Number(prompt('Digite o valor de C'))

    if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
        erroDeConta('O valor é um não numérico.')
    } else if (valorA === '' || valorB === '' || valorB === '') {
        erroDeConta('Um ou mais valores não foram enviados.')
    }

    function estruturaDelta(a, b, c){
        if (a < 0 || c < 0) {
            return (b ** 2) + (4 * a * c)
        } else if (a > 0 || c > 0) {
            return (b ** 2) - (4 * a * c)
        } else {
            return 'Você digitou algo inválido.'
        }
    }

    function calculaDelta(estruturaConta) {
        const raizDelta = Math.sqrt(estruturaConta)

        if (!raizDelta && raizDelta !== 0) return erroDeConta(`O valor da raiz quadrada é menor que zero, não há resultados válidos.`)
        return raizDelta
    }

    function calculaValoresDeX(valorDelta, a, b) {
        const conjuntoSolucao = []
        let i = 0
        while (i < 3) {
            if (valorDelta !== 0) {
                if (i === 1) {
                    let valorDeX = (-b + valorDelta) / (2 * a)
                    conjuntoSolucao.push(valorDeX.toFixed(2))
                } else if (i === 2) {
                    let valorDeX = (-b - valorDelta) / (2 * a)
                    conjuntoSolucao.push(valorDeX.toFixed(2))
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

    function erroDeConta(error) {
        p.innerText = error
        throw Error
    }

    function mostraResultado(conjuntoSolucao) {
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

    const equacaoDelta = estruturaDelta(valorA, valorB, valorC)
    const raizDelta = calculaDelta(equacaoDelta)
    const conjuntoSolucao = calculaValoresDeX(raizDelta, valorA, valorB)
    mostraResultado(conjuntoSolucao)
}
calculadoraEqSegundoGrau()