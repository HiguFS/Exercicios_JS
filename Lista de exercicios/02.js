function classeTriangulo (lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        return 'Triangulo Equilatero'
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return 'Triangulo Isósceles'
    } else {
        return 'Triangulo Escaleno'
    }
}

console.log(classeTriangulo (3, 4, 1));
console.log(classeTriangulo (2, 2, 5));
console.log(classeTriangulo (4, 4, 4));