const inicio = 1976;
const anioActual = new Date().getFullYear(); 
const anios = anioActual - inicio;          
document.getElementById("contador-anios").textContent = `Van ${anios} años de memoria verdad y justicia`; 

const buscador = document.getElementById("buscador");
const testimonios = document.querySelectorAll(".testimonio");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    testimonios.forEach((testimonio) => {
        const contenido = testimonio.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            testimonio.style.display = ""; 
        } else {
            testimonio.style.display = "none"; 
        }
    });
});

const btnGenerar = document.getElementById("btn-generar"); 
const inputMensaje = document.getElementById("mensaje-tarjeta");
const resultado = document.getElementById("tarjeta-resultado");

btnGenerar.addEventListener("click", () => {
    const mensaje = inputMensaje.value.trim(); 
    
    if (mensaje === "") {
        resultado.innerHTML = `<p class="error">Escribí un mensaje para generar la tarjeta</p>`;
        return; 
    }
    
    resultado.innerHTML = `
    <div class="tarjeta-memoria">
        <p class="tarjeta-fecha">24 de marzo - 1976-2026</p>
        <p class="tarjeta-mensaje">"${mensaje}"</p>
        <p class="tarjeta-firma">Memoria, Verdad y Justicia</p>
    </div>
    `;
});