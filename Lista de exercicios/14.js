function estoque (fruta) {
    switch (fruta) {
        case 'Maçã':
            case 'maçã': //caso cliente escreva com letra minuscula
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'Kiwi':
            case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'Melancia':
            case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}
estoque ('Kiwi')
estoque ('Uva')
estoque ('Caja')
estoque ('Maçã')
estoque ('Melancia')
estoque ('maçã')