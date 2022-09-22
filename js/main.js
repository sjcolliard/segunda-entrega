// Calculadora sueldo freelance //

class Sueldo {
    constructor(nombre, gastoMes, ahorro, horasTrabajo) {
        this.nombre = nombre;
        this.gastoMes = gastoMes; 
        this.ahorro = ahorro;
        this.horasTrabajo = horasTrabajo;
    }

    precioPorHora() {
        let resultado = ((this.gastoMes + this.ahorro) / horasTrabajo) / 24;
        return resultado.toFixed(2);
    }
}
 
const sueldoFreelance = [];

// Tomar datos del formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById(nombre).value;
    const gastoMes = document.getElementById("gastoMes").value;
    const ahorro = document.getElementById("ahorro").value;
    const horasTrabajo = document.getElementById("horasTrabajo").value;


    const sueldo = new Sueldo(gastoMes, ahorro, horasTrabajo);
    sueldoFreelance.push(sueldo);

    localStorage.setItem("Sueldo", JSON.stringify(sueldoFreelance));

    Formulario.reset();

    mostrarResultado(sueldo);
})

//Mostrar resultados 

const resultado = document.getElementById("divResultado");

const mostrarResultado = (sueldo) => {
    let variable ="";
    variable += `<p> Teniendo en cuenta tus gastos, lo que querés ahorrar y tus horas de trabajo, deberías cobrar $${sueldo.precioPorHora} por hora.</p>`
    resultado.innerHTML = variable;
}


let calcularPrecio = document. getElementById ("calcularPrecio");

calcularPrecio.addEventListener("click", precioPorHora());



/* const calcularPrecio = document.getElementById("calcularPrecio");
const divResultado = document.getElementById("divResultado");

calcularPrecio.addEventListener("click", () => {
    const sueldoFreelance = JSON.parse(localStorage.getItem("Sueldo"));
    let variable = "";
    sueldoFreelance.forEach(sueldo => {
        variable += `<p class="resultado"> Nombre ${sueldo.nombre} </p>`
    });
    divResultado.innerHTML = variable; 
}) */
