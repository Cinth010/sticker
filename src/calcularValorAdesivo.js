import valoresMedidasMaterial from './valoresMedidasMaterial'

/**
 *
 * @param {number} altura
 * @param {number} largura
 * @returns [number, number]
 */
function otimizarAvanco(altura, largura) {
  return [altura, largura].sort((a, b) => a - b)
}

/**
 * @param {string} alturaString
 * @param {string} larguraString
 * @param {string} quantidadeString
 * @param {boolean} adicionalDeArte
 * @param {'fosco' | 'blocado' | 'promocional' | 'transparente'} nomeMaterial
 */
function calcularValorAdesivo(
  alturaString,
  larguraString,
  quantidadeString,
  adicionalDeArte,
  nomeMaterial
) {
  const [altura, largura] = otimizarAvanco(
    Number(alturaString),
    Number(larguraString)
  )
  const { valorMaterialAmador, valorMaterialProfissional, larguraMaterial } =
    valoresMedidasMaterial(nomeMaterial)

  const quantidadeDeAdesivos = Number(quantidadeString)

  const AVANCO_IMPRESSORA = 4
  const VALOR_ARTE_ADICIONAL = 5

  const quantidadeDeAdesivosPorLinha = Math.floor(
    larguraMaterial / (largura + 0.3)
  )
  console.log(quantidadeDeAdesivosPorLinha)

  const quantidadeDeLinhas = Math.ceil(
    quantidadeDeAdesivos / quantidadeDeAdesivosPorLinha
  )
  const avancoImpressao =
    quantidadeDeLinhas * (altura + 0.3) + AVANCO_IMPRESSORA + 1
  console.log(avancoImpressao)

  const avancoTotalImpressao = Math.round(avancoImpressao)
  console.log(avancoTotalImpressao)

  const areaTotalAdesivos =
    (larguraMaterial / 100) * (avancoTotalImpressao / 100)
  const totalValorProfissional =
    areaTotalAdesivos * valorMaterialProfissional + (adicionalDeArte ? 5 : 0)
  const totalValorAmador =
    areaTotalAdesivos * valorMaterialAmador +
    (adicionalDeArte ? VALOR_ARTE_ADICIONAL : 0)

  return {
    larguraMaterial,
    avancoTotalImpressao,
    totalValorAmador,
    totalValorProfissional
  }
}

export default calcularValorAdesivo
