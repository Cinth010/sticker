/**
 * @param {'fosco' | 'blocado' | 'promocional' | 'transparente'} nomeMaterial 
 * @returns {{ valorMaterialAmador: number, valorMaterialProfissional: number, larguraMaterial: number }}
 */
function valoresMedidasMaterial (nomeMaterial){
    const VALORES = {
        fosco: {
            valorMaterialAmador: 120,
            valorMaterialProfissional: 66,
            larguraMaterial: 120,    
        },
        blocado: {
            valorMaterialAmador: 120,
            valorMaterialProfissional: 66,
            larguraMaterial: 130,
        },
        promocional: {
            valorMaterialAmador: 120,
            valorMaterialProfissional: 66,
            larguraMaterial: 130,
        },
        transparente: {
            valorMaterialAmador: 120,
            valorMaterialProfissional: 66,
            larguraMaterial: 130,
        }
    }

    return VALORES[nomeMaterial];
}

export default valoresMedidasMaterial;