    function enviarFormulario() {
        // Recolección de datos
        const texto = document.getElementById("textos").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const numero = document.getElementById("numero").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const check = document.getElementById("check").checked;
        const archivo = document.getElementById("archivo").files[0];
        const nivel = document.getElementById("range").value;

        // Opción seleccionada (radio)
        const opciones = document.getElementsByName("opciones");
        let opcionSeleccionada = "";
        for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcionSeleccionada = opciones[i].value;
            break;
        }
        }

        // Validación simbólica
        if (!check) {
        alert("Debes aceptar los términos y condiciones para continuar.");
        return;
        }

        // Panel de salida
        let salida = `
        Email: ${email}
        Contraseña: ${password}
        Texto: ${texto}
        Número: ${numero}
        Fecha: ${fecha}
        Hora: ${hora}
        Términos aceptados: ${check}
        Opción seleccionada: ${opcionSeleccionada}
        Archivo: ${archivo ? archivo.name : "No se seleccionó archivo"}
        Nivel: ${nivel}
        `;

        document.getElementById("resultado").innerText = salida;

        // Consola ritual
        console.log("Formulario enviado con los siguientes datos:");
        console.log(salida);

        alert("Formulario enviado correctamente. Revisa la consola y el panel de salida.");
    }