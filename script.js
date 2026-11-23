
// Se declaran variables constantes

// Selecciona el boton
const boton = document.getElementById("boton");
// Selecciona el numero que se le va a asignar a "b"
const textoB = document.getElementById("b");
// Selecciona el numero que se le va a asignar a "c"
const textoC = document.getElementById("c");
// Selecciona el texto que se va a dar si la funcion es constante o no hay funcion
const mensaje = document.getElementById("mensaje");
// Selecciona el contenedor asignado para la descripcion de funcion lineal 
const descripcionLineal = document.getElementById("descripcionLineal");
// Selecciona el contenedor asignado para la descripcion de funcion afin 
const descripcionAfin = document.getElementById("descripcionAfin");

// Se declara la funcion"generar"
function generar() {
    // Toma el texto de ciertas variables (vacias)

    //Selecciona el texto del espacio asigando para la descripcion de la funcion lineal
    descripcionLineal.innerText = "";
    //Selecciona el texto del espacio asigando para la descripcion de la funcion lineal
    descripcionAfin.innerText = "";
    // Selecciona el texto asigando para el mensaje por si la funcion es constante o no hay funcion
    mensaje.innerText = "";

    // Se declara variables let las cuales dan un numero del -3 al 3
    let b = Math.floor(Math.random() * 7) - 3;
    let c = Math.floor(Math.random() * 7) - 3;

    // Selecciona el texto de b (Para colocar el numero)
    textoB.innerText = b;
    // Selecciona el texto de c (Para colocar el numero)
    textoC.innerText = c;

    // Declara que si b y c son igual a 0 no hay funcion
    if (b == 0 && c == 0) {
        // Escribe el texto desigando
        mensaje.innerText = "No hay función";

    // Si no pasa lo anterior se declara que si b es igual a 0 y c es distinto a 0 es una funcion constante
    } else if (b == 0 && c != 0) {
        // Escribe el texto desigando
        mensaje.innerText = "Función constante";

    // Si no pasa lo anterior se declara que si c es igual a 0 sigue para verificar otro parametro
    } else if (c === 0) {
        // Se declara una variable para el texto de la funcion lineal (Creciente o decreciente)
        let textoPendiente;

        // Si b es mayor que 0 es funcion creciente
        if (b > 0) {
            // Escribe el texto desigando
            textoPendiente = "Función creciente (sube de izquierda a derecha)";
        // Si no es funcion decreciente
        } else {
            // Escribe el texto desigando
            textoPendiente = "Función decreciente (baja de izquierda a derecha)";
    }

    // Se inserta la descripcion de la funcion lineal en el lugar de la descripcion lineal
    descripcionLineal.innerHTML = 
    "<p>Gráfica: Línea recta continua.</p>" +
    "<p>Paso Obligatorio: Pasa por el origen de coordenadas (0, 0).</p>" +
    "<p>Pendiente: " + textoPendiente + "</p>";

    // Si no pasa lo anterior se inserta la descripcion de la funcion afin en el lugar de la descripcion afin
    } else {
        descripcionAfin.innerHTML = 
        "<p>Gráfica: Línea recta que no pasa por el origen.</p>" +
        "<p>Corte Eje Y: Interseca al eje Y en las coordenadas (0, " + c + ").</p>" +
        "<p>Inclinación: Regulada por el valor del coeficiente de pendiente.</p>" +
        "<p>Traslación: Es una traslación vertical de la función lineal f(x) = x en " + c + " unidades.</p>";
    }
}

// Se llama al boton, para que cuando uno le de click ejecute toda la funcion "generar"
boton.addEventListener("click", generar);

