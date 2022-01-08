//Código del Cuadrado
//console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadro miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado (lado){
    return lado * lado;
} 
//console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);
//console.groupEnd();

//Código del Triángulo

//console.group("Triángulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//console.groupEnd();

//Código Círculo

//console.group("Círculo");

//const radioCirculo = 4;
function diametroCirculo (radio){
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}


//Calcular altura de un Triángulo Isosceles

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");

    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;

    if(lado1 != lado2){
        alert("Los lados no son iguales, por lo tanto no es un triángulo isóceles")
    }else{
        const altura = Math.sqrt((lado1*lado2)-((base*base)/4))

        alert(altura);
    }

}
