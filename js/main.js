// Calculadora sueldo freelance //

class Sueldo {
    constructor(nombre, gastoMes, ahorro, horasTrabajo, diasPorMes) {
        this.nombre = nombre;
        this.gastoMes = parseInt(gastoMes);
        this.ahorro = parseInt(ahorro);
        this.horasTrabajo = parseInt(horasTrabajo);
    }

    precioPorHora() {
        let resultado = ((this.gastoMes + this.ahorro) / this.horasTrabajo) / 24;
        return resultado.toFixed(2);
    }
}

const sueldoFreelance = [];

// Datos del formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const gastoMes = document.getElementById("gastoMes").value;
    const ahorro = document.getElementById("ahorro").value;
    const horasTrabajo = document.getElementById("horasTrabajo").value;

    const sueldo = new Sueldo(nombre, gastoMes, ahorro, horasTrabajo);
    sueldoFreelance.push(sueldo);

    console.log(sueldoFreelance);

    formulario.reset();

    mostrarResultado(sueldo);
});


// mostrar resultado


const resultadoSueldo = document.getElementById("divResultado");

const mostrarResultado = (sueldo) => {
    sueldoFreelance.forEach(sueldo => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${sueldo.nombre}, para cubrir tus gastos de $${sueldo.gastoMes} y poder ahorrar $${sueldo.ahorro}, trabajando ${sueldo.horasTrabajo} horas por día, deberías cobrar $${sueldo.precioPorHora()} por hora.</p>`;

        resultadoSueldo.appendChild(div)
    })
}
// botón

const calcularPrecio = document.getElementById("calcularPrecio");

calcularPrecio.addEventListener("click", () => {
    mostrarResultado();
}
)