
// Se declaran variables constantes
const boton = document.getElementById("boton");
const textoB = document.getElementById("b");
const textoC = document.getElementById("c");
const mensaje = document.getElementById("mensaje");
const descripcionLineal = document.getElementById("descripcionLineal");
const descripcionAfin = document.getElementById("descripcionAfin");

// Se declara la funcion"generar"
function generar() {
    // Toma el texto de ciertas variables (vacio)
    descripcionLineal.innerText = "";
    descripcionAfin.innerText = "";
    mensaje.innerText = "";

    // Se declara variables let las cuales dan un numero del -3 al 3
    let b = Math.floor(Math.random() * 7) - 3;
    let c = Math.floor(Math.random() * 7) - 3;

    // Toma el texto de ciertas variables
    textoB.innerText = b;
    textoC.innerText = c;

    // Declara que si b y c son igual a 0 no hay funcion
    if (b == 0 && c == 0) {
        mensaje.innerText = "No hay función";

    // Si no pasa lo anterior se declara que si b es igual a 0 y c es distinto a 0 es una funcion constante
    } else if (b == 0 && c != 0) {
        mensaje.innerText = "Función constante";

    // Si no pasa lo anterior se declara que si c es igual a 0 sigue para verificar otro parametro
    } else if (c === 0) {
        // Se declara la descripcion de la funcion
        let textoPendiente;

        // Si b es mayor que 0 es funcion creciente
        if (b > 0) {
            textoPendiente = "Función creciente (sube de izquierda a derecha)";
        // Si no es funcion decreciente
        } else {
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

// Se llama al boton y que cunado uno le de click ejecute toda la funcion "generar"
boton.addEventListener("click", generar);

