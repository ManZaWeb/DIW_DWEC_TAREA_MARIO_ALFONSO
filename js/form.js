// Autor: Mario Alfonso Nuñez
//GitHub:https://github.com/ManZaWeb/DIW_DWEC_TAREA_MARIO_ALFONSO.git

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const areaErrores = document.getElementById("areaErrores");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const telefono = document.getElementById("tlf").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const msg = document.getElementById("msg").value.trim();

        
        let errores = [];

        const nombreRegex = /^[A-Z][a-zA-Z]*$/;
        if (!nombreRegex.test(nombre)) {
            errores.push("El nombre debe empezar por mayúscula y no puede contener caracteres especiales.");
        }

        const apellidosRegex = /^[A-Z][a-zA-Z]*$/;
        if (!apellidosRegex.test(apellidos)) {
            errores.push("Los apellidos deben empezar por mayúscula y no pueden contener caracteres especiales.");
        }

        const telefonoRegex = /^[6-7]\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            errores.push("Formato de teléfono incorrecto.");
        }

        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            errores.push("Formato de correo incorrecto.");
        }

        if (msg.length < 10) {
            errores.push("El mensaje debe tener al menos 10 caracteres.");
        }

        
        if (errores.length > 0) {
            mostrarErrores(errores);
        } else if(errores.length == 0 && confirm("¿Estás seguro de que deseas enviar el formulario?")) {
            
            formulario.submit(); 
            }
        }
    );

    function mostrarErrores(errores) {
        
        areaErrores.innerHTML = "";

        
        errores.forEach(function (error) {
            const li = document.createElement("li");
            li.textContent = error;
            areaErrores.appendChild(li);
        });
    }
});

const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;
const formulario = document.getElementById("form-container");

darkModeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  formulario.classList.toggle("dark-mode-form");
});

