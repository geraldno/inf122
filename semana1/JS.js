var numero = 13;
if (numero % 2 === 0) {
    console.log(numero + 'es par');
} else {
    console.log(numero + 'no es par');
}

    if (num % 5 === 0){
        console.log(num + 'es multiplo de 5');
    } else{
        console.log(num+ 'no es multiplo de 5');
    }


//for incrementar
    for (let i = 0; i < 5; i++) {
        console.log (i);
    }
    // for decrementar 
    for (let i = 10; i > 0; i--) {
        console.log (i);
    }


//while incrementar

    let contador = 0;
    while (contador < 5){
        contador++;
        console.log(contador)
    }
//while decremetnar
    let contador1= 10;
    while (contador >= 0){
        contador1--;
        console.log(contador1)
    }


     var elemento = colores.find(function comparador (elemento){
        return elemento === "rojo";
    });

        var elemento = colores.findIndex(function comparador (elemento){
            return elemento === "1";
        });
    
        function saludar (nombre){
            return "Hola," + nombre+"!";
        }
        const mensaje = saludar("gerald")


        function suma (){
            n1=a; n2=b;
            sumas= n1+n2
            return sumas;
        }