/**
 * @param {'fosco' | 'blocado' | 'promocional' | 'transparente'} nomeMaterial 
 * @returns {{ valorMaterialAmador: number, valorMaterialProfissional: number, larguraMaterial: number }}
 */
function valoresMedidasMaterial (nomeMaterial){
    const VALORES = {
        fosco: {
            valorMaterialAmador: 132,
            valorMaterialProfissional: 66,
            larguraMaterial: 120,    
        },
        blocado: {
            valorMaterialAmador: 138,
            valorMaterialProfissional: 77,
            larguraMaterial: 126,
        },
        promocional: {
            valorMaterialAmador: 132,
            valorMaterialProfissional: 66,
            larguraMaterial: 127,
        },
        transparente: {
            valorMaterialAmador: 132,
            valorMaterialProfissional: 66,
            larguraMaterial: 127,
        }
    }

    return VALORES[nomeMaterial];
}

export default valoresMedidasMaterial;