const USUARIO = (document.getElementById("usuario")); //absorver el valor del questionario
const FONDO = document.body; //crear la constante que tendra como valor el contenido del body

let min = 0; // variable necesarioa para cuando generamos el numero random yq ue no se ainferior

let max = 500; // igual peor con el numeor maximo

let nRandom = Math.floor(Math.random() * (max - min + 1)) + min; //tener un numero random
console.log(nRandom);

let contador = 0; // declarado fuera de la función

FONDO.style.backgroundImage = "url('./img/enigma.jpg')"; //la constante fon con el valor body, usa style y sentencia css para el fondo de pantalla

function comparar() {

    contador++;

    let valor = parseInt(USUARIO.value); // convierte input en número
    console.log("Valor ingresado:", valor);

    let distancia = Math.abs(valor - nRandom); // calcula la distancia
      console.log(distancia);
    let distancia50 = 50; //el enunciado dice que para tibio hay que comprobar si entre el numero y el del usuario hay una diferencia de 50
    console.log(distancia50);
    let distancia15 = 15; //igual con 50 que con 15
    console.log(distancia15);

    if (valor < min || valor > max) { //primero las condiciones genericas

        document.getElementById("solucion").innerHTML = "A ver, el número tiene que ser desde 0 hasta 500, ¡¡BESUGO!!!";

    } else if (valor === nRandom) {

        document.getElementById("solucion").innerHTML = "¡Acierto! Has adivinado el número.";

        FONDO.style.backgroundImage = "url('./img/descargar.jpg')";


    } else if (valor > nRandom + distancia50) { //comparacion para tibio compara si valor es menor a la suma de nrandom y distancia 50

        document.getElementById("solucion").innerHTML = "Frío, frío: tu número es más grande que el mío";

        FONDO.style.backgroundImage = "url('./img/frio.jpg')"; //body.style.backgroundImage hace de caminito hacia la imagen en la carpeta

    } else if (valor < nRandom - distancia50) {

        document.getElementById("solucion").innerHTML = "Frío, frío: tu número es más pequeño que el mío";

        FONDO.style.backgroundImage = "url('./img/frio.jpg')";


    } else if (distancia >= 15 && distancia <= 50) {

        if (valor > nRandom) {

            document.getElementById("solucion").innerHTML = " Tibio, tibio: tu número es más grande que el mío";

            FONDO.style.backgroundImage = "url('./img/hiervas.jpg')";


        } else {

            document.getElementById("solucion").innerHTML = "Tibio, tibio: tu número es más pequeño que el mío";

            FONDO.style.backgroundImage = "url('./img/hiervas.jpg')";

        }

    } else if (valor > nRandom + distancia15) {

        document.getElementById("solucion").innerHTML = "Caliente, caliente: tu número es más grande que el mío";

        FONDO.style.backgroundImage = "url('./img/calor.jpg')";


    } else if (valor < nRandom - distancia15) {

        document.getElementById("solucion").innerHTML = "Caliente, caliente: tu número es más pequeño que el mío";

       FONDO.body.backgroundImage = "url('./img/calor.jpg')";


    }

    document.getElementById("n").innerHTML = "Intentos: " + contador; //muestra del valor del contador







}