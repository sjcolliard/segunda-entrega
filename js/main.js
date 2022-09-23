// Calculadora sueldo freelance //

class Sueldo {
    constructor(gastoMes, ahorro, horasTrabajo) {
        this.gastoMes = gastoMes;
        this.ahorro = ahorro;
        this.horasTrabajo = horasTrabajo;
    }

    precioPorHora() {
        let resultado = ((this.gastoMes + this.ahorro) / this.horasTrabajo) / 24;
        return resultado.toFixed(2);
    }
}

const sueldoFreelance = [];

// Tomar datos del formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const gastoMes = document.getElementById("gastoMes").value;
    const ahorro = document.getElementById("ahorro").value;
    const horasTrabajo = document.getElementById("horasTrabajo").value;


    const sueldo = new Sueldo(gastoMes, ahorro, horasTrabajo);
    sueldoFreelance.push(sueldo);

    localStorage.setItem("Sueldo", JSON.stringify(sueldoFreelance));

    formulario.reset();

    mostrarResultado(sueldo);
})

//Mostrar resultados 

const calcularPrecio = document.getElementById("calcularPrecio");

calcularPrecio.onClick = () => {
    let mostrarResultado = document.createElement("mostrarResultado");
    mostrarResultado.innerHTML = `<p>Teniendo en cuenta tus gastos y lo que querés ahorrar, deberías cobrar $${sueldo.precioPorHora()} por hora.</p>`;

    mostrarResultado.appendChild(calcularPrecio);
}