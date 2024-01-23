document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const areaErrores = document.getElementById("areaErrores");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const telefono = document.getElementById("tlf").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const msg = document.getElementById("msg").value.trim();

        // Validación utilizando expresiones regulares
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
            errores.push("El teléfono debe tener 9 dígitos y empezar por 6 o 7.");
        }

        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            errores.push("El correo debe contener una @ y terminar con .com, .es, .etc.");
        }

        if (msg.length < 10) {
            errores.push("El mensaje debe tener al menos 10 caracteres.");
        }

        // Mostrar mensajes de error si los hay
        if (errores.length > 0) {
            mostrarErrores(errores);
        } else {
            // Pedir confirmación antes de enviar el formulario
            const confirmacion = confirm("¿Estás seguro de que deseas enviar el formulario?");
            if (confirmacion) {
                formulario.submit(); // Envía el formulario si se confirma
            }
        }
    });

    function mostrarErrores(errores) {
        // Limpiar mensajes anteriores
        areaErrores.innerHTML = "";

        // Mostrar nuevos mensajes de error
        errores.forEach(function (error) {
            const li = document.createElement("li");
            li.textContent = error;
            areaErrores.appendChild(li);
        });
    }
});
