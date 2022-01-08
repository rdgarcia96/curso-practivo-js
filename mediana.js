//const lista1 = [
//    100,
//    200,
//    500,
//    400000000
//]

function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numero){
        if(numero % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(lista.length)){
        const elemeto1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];

        const promedioElemeto1y2 = calcularMediaAritmetica([elemeto1, elemento2])

        mediana = promedioElemeto1y2;
        return mediana;

    }else{
        mediana = lista[mitadLista];
        return mediana;
    }

}

function ordenarLista(listaDesordenada){
    const listaOrdenada = listaDesordenada.sort(
        function(a, b){
            return a - b
        }
    )

    return listaOrdenada;
}



function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}