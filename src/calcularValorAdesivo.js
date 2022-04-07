/**
 * 
 * @param {number} altura 
 * @param {number} largura 
 * @returns [number, number]
 */
function otimizarAvanco(altura, largura) {
    return [altura, largura].sort((a, b) => a - b);
}

/**
 * 
 * @param {string} alturaString 
 * @param {string} larguraString 
 * @param {string} quantidadeString 
 * @param {boolean} adicionalDeArte
 */
function calcularValorAdesivo(alturaString, larguraString, quantidadeString, adicionalDeArte) {
    const [altura, largura] = otimizarAvanco(Number(alturaString), Number(larguraString));
    const quantidadeDeAdesivos = Number(quantidadeString);

    const LARGURA_MATERIAL = 120;
    const VALOR_PROFISSIONAL = 66;
    const VALOR_AMADOR = 120;

    const quantidadeDeAdesivosPorLinha = Math.floor(LARGURA_MATERIAL / largura);

    const quantidadeDeLinhas = Math.ceil(quantidadeDeAdesivos / quantidadeDeAdesivosPorLinha);
    const avancoTotalImpressao = (quantidadeDeLinhas * altura) + 2;

    const areaTotalAdesivos = (LARGURA_MATERIAL / 100)*(avancoTotalImpressao / 100);

    const totalValorProfissional = areaTotalAdesivos * VALOR_PROFISSIONAL + (adicionalDeArte ? 5 : 0);
    const totalValorAmador = (areaTotalAdesivos * VALOR_AMADOR) + (adicionalDeArte ? 5 : 0);

    return {
        larguraMaterial: LARGURA_MATERIAL,
        avancoTotalImpressao,
        totalValorAmador,
        totalValorProfissional,
    }
}

export default calcularValorAdesivo;