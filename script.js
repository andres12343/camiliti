document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       ELEMENTOS
       ================================================== */

    const inicio =
        document.getElementById("inicio");

    const botonEntrar =
        document.getElementById("entrar");

    const portada =
        document.getElementById("portada");

    const botonContinuar =
        document.getElementById("continuar");

    const historia =
        document.getElementById("historia");

    const historiaContinuar =
        document.getElementById("historiaContinuar");

    const juego =
        document.getElementById("juego");

    const botonSi =
        document.getElementById("si");

    const botonNo =
        document.getElementById("no");

    const botonTalvez =
        document.getElementById("talvez");

    const flores =
        document.getElementById("flores");

    const floresContinuar =
        document.getElementById("floresContinuar");

    const noche =
        document.getElementById("noche");

    const mensajeFinal =
        document.querySelector(".mensaje-amor-final");

    const firmaFinal =
        document.querySelector(".firma-final");


    /* ==================================================
       VOLVER ARRIBA
       ================================================== */

    function arriba() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ==================================================
       ENTRAR
       ================================================== */

    botonEntrar.onclick = function () {

        inicio.style.display = "none";

        portada.style.display = "flex";

        arriba();

    };


    /* ==================================================
       PORTADA → HISTORIA
       ================================================== */

    botonContinuar.onclick = function () {

        portada.style.display = "none";

        historia.style.display = "block";

        arriba();

    };


    /* ==================================================
       HISTORIA → JUEGO
       ================================================== */

    historiaContinuar.onclick = function () {

        historia.style.display = "none";

        juego.style.display = "flex";

        arriba();

    };


    /* ==================================================
       ESCAPAR
       SOLO CLICK
       ================================================== */

    function escapar(boton) {

        const margen = 25;

        const maxX =
            window.innerWidth -
            boton.offsetWidth -
            margen;

        const maxY =
            window.innerHeight -
            boton.offsetHeight -
            margen;

        const nuevaX =
            margen +
            Math.random() *
            Math.max(maxX - margen, 1);

        const nuevaY =
            margen +
            Math.random() *
            Math.max(maxY - margen, 1);

        boton.style.position = "fixed";

        boton.style.left =
            nuevaX + "px";

        boton.style.top =
            nuevaY + "px";

        boton.animate(
            [
                {
                    transform:
                        "scale(.75) rotate(-8deg)"
                },

                {
                    transform:
                        "scale(1.15) rotate(8deg)"
                },

                {
                    transform:
                        "scale(1) rotate(0deg)"
                }

            ],
            {
                duration: 350,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

    }


    /* ==================================================
       NO
       ================================================== */

    botonNo.onclick = function (evento) {

        evento.preventDefault();

        escapar(botonNo);

    };


    /* ==================================================
       A VECES
       ================================================== */

    botonTalvez.onclick = function (evento) {

        evento.preventDefault();

        escapar(botonTalvez);

    };


    /* ==================================================
       SÍ → FLORES
       ================================================== */

    botonSi.onclick = function () {

        juego.style.display = "none";

        botonNo.style.position = "";
        botonNo.style.left = "";
        botonNo.style.top = "";

        botonTalvez.style.position = "";
        botonTalvez.style.left = "";
        botonTalvez.style.top = "";

        flores.style.display = "flex";

        arriba();

    };


    /* ==================================================
       FLORES → NOCHE
       ================================================== */

    floresContinuar.onclick = function () {

        flores.style.display = "none";

        noche.style.display = "flex";

        arriba();

        iniciarFinal();

    };


    /* ==================================================
       FINAL
       ================================================== */

    function iniciarFinal() {

        mensajeFinal.classList.remove("visible");

        firmaFinal.classList.remove("visible");

        noche.classList.remove("corazon-listo");


        /*
            Dejamos unos segundos de cielo
            antes de comenzar.
        */

        setTimeout(function () {

            mensajeFinal.classList.add("visible");

        }, 1800);


        /*
            Después de leer el mensaje,
            las estrellas forman el corazón.
        */

        setTimeout(function () {

            noche.classList.add("corazon-listo");

        }, 10500);


        /*
            La firma aparece al final.
        */

        setTimeout(function () {

            firmaFinal.classList.add("visible");

        }, 14000);

    }

});