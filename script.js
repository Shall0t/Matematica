const boton = document.getElementById("generar");
const b = document.getElementById("b");
const c = document.getElementById("c");
const listaLineal = document.getElementById("propiedadesLineal");
const listaAfin = document.getElementById("propiedadesAfin");

function numeroAleatorio() {
    return Math.floor(Math.random() * 21) - 10;
}

boton.addEventListener("click", function() {
    let b = numeroAleatorio();
    let c = numeroAleatorio();

    b.textContent = b;
    c.textContent = c;

    listaLineal.innerHTML = "";
    listaAfin.innerHTML = "";

    if (c === 0) {
        let inclinacion = "";
        if (b > 0) {
            inclinacion = "Función creciente (sube de izquierda a derecha).";
        } else if (b < 0) {
            inclinacion = "Función decreciente (baja de izquierda a derecha).";
        } else {
            inclinacion = "Función constante (pendiente 0).";
        }

        listaLineal.innerHTML = `
            <li><strong>Ecuación:</strong> f(x) = ${b}x</li>
            <li><strong>Gráfica:</strong> Línea recta continua.</li>
            <li><strong>Paso Obligatorio:</strong> Pasa por el origen (0, 0).</li>
            <li><strong>Pendiente (${b}):</strong> ${inclinacion}</li>
        `;
    } else {
        listaAfin.innerHTML = `
            <li><strong>Ecuación:</strong> f(x) = ${b}x + (${c})</li>
            <li><strong>Gráfica:</strong> Línea recta que no pasa por el origen.</li>
            <li><strong>Corte Eje Y:</strong> Interseca en (0, ${c}).</li>
            <li><strong>Inclinación:</strong> Regulada por pendiente b = ${b}.</li>
            <li><strong>Traslación:</strong> Se traslada ${c} unidades en el eje Y.</li>
        `;
    }
});