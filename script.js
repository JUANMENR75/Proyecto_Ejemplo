const botonDescargar = document.getElementById("btn-descargar");

const modal = document.getElementById("download-modal");

const progressBar = document.getElementById("progress-bar");

const progressPercent = document.getElementById("progress-percent");

const downloadText = document.getElementById("download-text");

const downloadSuccess = document.getElementById("download-success");

const botonCerrar = document.getElementById("btn-cerrar");



botonDescargar.addEventListener("click", iniciarDescarga);

function iniciarDescarga() {

    modal.classList.add("active");

    progressBar.style.width = "0%";

    progressPercent.textContent = "0%";

    downloadText.textContent =
        "Preparando descarga...";

    downloadSuccess.style.display = "none";

    botonCerrar.style.display = "none";


    botonDescargar.disabled = true;


    let progreso = 0;



    const intervalo = setInterval(() => {

        // Aumentar progreso
        progreso += 2;


        // Actualizar barra
        progressBar.style.width =
            progreso + "%";


        // Actualizar porcentaje
        progressPercent.textContent =
            progreso + "%";


        // =================================
        // MENSAJES SEGÚN EL PROGRESO
        // =================================

        if (progreso < 20) {

            downloadText.textContent =
                "Preparando archivos...";

        }

        else if (progreso < 45) {

            downloadText.textContent =
                "Conectando con el servidor...";

        }

        else if (progreso < 70) {

            downloadText.textContent =
                "Descargando archivos del juego...";

        }

        else if (progreso < 90) {

            downloadText.textContent =
                "Instalando archivos...";

        }

        else if (progreso < 100) {

            downloadText.textContent =
                "Finalizando descarga...";

        }


        if (progreso >= 100) {

            clearInterval(intervalo);


            progressBar.style.width = "100%";

            progressPercent.textContent = "100%";


            downloadText.textContent =
                "Descarga completada";


            // Esperar un momento
            setTimeout(() => {

                downloadSuccess.style.display =
                    "block";

                botonCerrar.style.display =
                    "block";

            }, 500);

        }

    }, 100);

}


botonCerrar.addEventListener("click", () => {

    modal.classList.remove("active");

    botonDescargar.disabled = false;

});


modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        // Solo permitir cerrar cuando
        // la descarga haya terminado

        if (
            progressPercent.textContent === "100%"
        ) {

            modal.classList.remove("active");

            botonDescargar.disabled = false;

        }

    }

});
