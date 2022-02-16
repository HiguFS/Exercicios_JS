function tipoVeiculo(modelo) {
    switch (modelo) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'Sedan':
        case 'Caminhonete':
        case 'Motocicleta':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}
tipoVeiculo ('Caminhonete')
tipoVeiculo ('Avião')
tipoVeiculo ('Hatch')
tipoVeiculo ('Bicicleta')