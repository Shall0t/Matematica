const boton = document.getElementById("boton");
const textoB = document.getElementById("b");
const textoC = document.getElementById("c");
const mensaje = document.getElementById("mensaje");
const descripcionLineal = document.getElementById("descripcionLineal");
const descripcionAfin = document.getElementById("descripcionAfin");


function generar() {
    descripcionLineal.innerHTML = "";
    descripcionAfin.innerHTML = "";
    mensaje.innerText = "";


    let b = Math.floor(Math.random() * 7) - 3;
    let c = Math.floor(Math.random() * 7) - 3;


    textoB.innerText = b;
    textoC.innerText = c;


    if (b == 0 && c == 0) {
        mensaje.innerText = "No hay función";


    } else if (b == 0 && c != 0) {
        mensaje.innerText = "Función constante";


    } else if (c == 0) {
        let textoPendiente = "";


        if (b > 0) {
            textoPendiente = "Función creciente (sube de izquierda a derecha)";
        } else {
            textoPendiente = "Función decreciente (baja de izquierda a derecha)";
        }


        descripcionLineal.innerHTML =
            "<li><b>Gráfica:</b> Línea recta continua.</li>" +
            "<li><b>Paso Obligatorio:</b> Pasa por el origen de coordenadas (0, 0).</li>" +
            "<li><b>Pendiente (b):</b> " + textoPendiente + "</li>";


    } else {
        descripcionAfin.innerHTML =
            "<li><b>Gráfica:</b> Línea recta que no pasa por el origen.</li>" +
            "<li><b>Corte Eje Y:</b> Interseca al eje Y en las coordenadas (0, " + c + ").</li>" +
            "<li><b>Inclinación:</b> Regulada por el valor del coeficiente de pendiente b.</li>" +
            "<li><b>Traslación:</b> Es una traslación vertical de la función lineal f(x) = bx en " + c + " unidades.</li>";
    }
}


boton.onclick = generar;



