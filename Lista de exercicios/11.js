function anoBissexto (ano) {
    if( ano<= 0){
        return false
    }else if ( ano % 400 == 0) {
        return true
    } else if ( ano % 100 == 0) {
        return false
    } else if ( ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBissexto (3))
console.log(anoBissexto (4))
console.log(anoBissexto (1500))
console.log(anoBissexto (2500))
console.log(anoBissexto (1400))
console.log(anoBissexto (150))
console.log(anoBissexto (1468))