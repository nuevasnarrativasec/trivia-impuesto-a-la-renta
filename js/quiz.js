const preguntas = [
            { 
                pregunta: "¿Quiénes deben presentar el Impuesto a la Renta?", 
                opciones: ["A. Todas las Personas Con Negocio o Empresa  ", "B. Todas las Personas Naturales Sin Negocio", "C. A y B "], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/01.png", 
                mensaje: ["Incorrecto. Todos deben declarar el Impuesto a la Renta.", "Incorrecto. Todos deben declarar el Impuesto a la Renta.", "Correcto. Todos deben declarar el Impuesto a la Renta."] 
            },
            { 
                pregunta: "¿Mi declaración de Impuesto a la Renta 2025 se determina anualmente, eso quiere decir que abarca las rentas o pérdidas del 01 de enero al 31 de diciembre?", 
                opciones: ["A. Verdadero", "B. Falso"], 
                correcta: 0, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/02.png", 
                mensaje: ["¡Correcto!", "Incorrecto"] 
            },
            { 
                pregunta: "¿Cuál es la diferencia entre la cuarta y quinta categoría?", 
                opciones: ["A. La renta de cuarta categoría es para trabajadores dependientes y la de quinta es para independientes.", "B. La renta de cuarta categoría se aplica para trabajadores independientes y la quinta para dependientes.", "C. Ambos son iguales."], 
                correcta: 1, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/03.png", 
                mensaje: ["Incorrecto", "¡Correcto!","Incorrecto"] 
            },
            { 
                pregunta: "¿Una persona que recibe su remuneración en planilla y que a las retenciones de su Impuesto a la Renta se le suman asignaciones, bonificaciones, aguinaldos y utilidades, de qué categoría es?", 
                opciones: ["A. Primera", "B. Segunda", "C. Tercera", "D. Cuarta", "E. Quinta"], 
                correcta: 4, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/04.png", 
                mensaje: ["Incorrecto", "Incorrecto","Incorrecto","Incorrecto","¡Correcto!"] 
            },
            { 
                pregunta: "¿Una persona que recibe su remuneración por Recibos por Honorarios, de qué categoría es?", 
                opciones: ["A. Primera", "B. Segunda", "C. Tercera", "D. Cuarta", "E. Quinta"], 
                correcta: 3, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/05.png", 
                mensaje: ["Incorrecto", "Incorrecto","Incorrecto","¡Correcto!","Incorrecto"] 
            },
            { 
                pregunta: "¿Cuánto deben ganar los contribuyentes de cuarta categoría como máximo anualmente para estar exonerados del Impuesto a la Renta, según la normativa vigente?", 
                opciones: ["A. Máximo S/ 46.813", "B. Máximo S/ 45.234", "C. Máximo S/ 43.678"], 
                correcta: 0, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/06.png", 
                mensaje: ["¡Correcto!", "Incorrecto","Incorrecto",] 
            },
            { 
                pregunta: "¿Cuánto deben ganar los contribuyentes de quinta categoría como máximo anualmente para estar exonerados del Impuesto a la Renta, según la normativa vigente?", 
                opciones: ["A. Máximo S/ 37.455", "B. Máximo S/ 38.450", "C. Máximo S/ 37.450"], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/07.png", 
                mensaje: ["Incorrecto", "Incorrecto", "¡Correcto!",] 
            },
            { 
                pregunta: "Si recibo mis ingresos por cuarta y quinta categoría, ¿cuánto es el máximo que debo ganar anualmente para estar exonerado del Impuesto a la Renta según la normativa vigente?", 
                opciones: ["A. Máximo S/ 38.450", "B. Máximo S/ 37.450", "C. Máximo S/ 34.455"], 
                correcta: 1, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/08.png", 
                mensaje: ["Incorrecto. Según Jorge Carrillo, experto en finanzas de Pacífico Business School,  si generas ingresos por cuarta y quinta categoría, debes tomar en cuenta que la suma de los ingresos por planilla y el 80% de los recibos por honorarios no excedan los S/ 37.450 para no declarar impuestos. ", "¡Correcto! Según Jorge Carrillo, experto en finanzas de Pacífico Business School,  si generas ingresos por cuarta y quinta categoría, debes tomar en cuenta que la suma de los ingresos por planilla y el 80% de los recibos por honorarios no excedan los S/ 37.450 para no declarar impuestos. ", "Incorrecto. Según Jorge Carrillo, experto en finanzas de Pacífico Business School,  si generas ingresos por cuarta y quinta categoría, debes tomar en cuenta que la suma de los ingresos por planilla y el 80% de los recibos por honorarios no excedan los S/ 37.450 para no declarar impuestos.",] 
            },
            { 
                pregunta: "Si recibo ingresos por cuarta categoría y mis ingresos son menores a  S/46.813 anuales, ¿debo declarar impuestos?", 
                opciones: ["A. Sí", "B. No"], 
                correcta: 1, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/09.png", 
                mensaje: ["¡Correcto! Jorge Carrillo, experto en finanzas de Pacífico Business School, precisa que las personas en cuarta categoría sí están obligados a declarar impuestos, así reciban anualmente menos de S/ 46.813. Por su parte, las personas en quinta categoría no están obligadas a declarar impuestos si reciben un importe menor a los S/ 37.450 al año. ", "Incorrecto. Jorge Carrillo, experto en finanzas de Pacífico Business School, precisa que las personas en cuarta categoría sí están obligados a declarar impuestos, así reciban anualmente menos de S/ 46.813. Por su parte, las personas en quinta categoría no están obligadas a declarar impuestos si reciben un importe menor a los S/ 37.450 al año. "] 
            },
            { 
                pregunta: "Si recibo mi sueldo en planilla por 5ta categoría y mis ingresos son menores a S/37.450, ¿debo declarar impuestos?", 
                opciones: ["A. Sí", "B. No necesariamente"], 
                correcta: 1, 
                imagen: "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/10.png", 
                mensaje: ["Incorrecto", "¡Correcto!"] 
            },
        ];

        let indicePregunta = 0;
        let respuestasCorrectas = 0;

        function mostrarPregunta() {
            const quizContainer = document.getElementById("quiz");
            const preguntaActual = preguntas[indicePregunta];
            let html = `<h2>${preguntaActual.pregunta}</h2>`;
            html += `<img src="${preguntaActual.imagen}" alt="Imagen de la pregunta" style="display: block; margin: 0 auto; max-width:80px; height:auto; margin-bottom:10px;">`;
            preguntaActual.opciones.forEach((opcion, index) => {
                html += `<button class='opcion' onclick='seleccionarRespuesta(${index})'>${opcion}</button>`;
            });
            html += `<p id='mensaje'></p>`;
            html += `<button id='siguiente' onclick='siguientePregunta()' disabled>Siguiente</button>`;
            quizContainer.innerHTML = html;
        }

        function seleccionarRespuesta(index) {
            const botones = document.querySelectorAll(".opcion");
            const mensaje = document.getElementById("mensaje");
            if (index === preguntas[indicePregunta].correcta) {
                botones[index].style.backgroundColor = "green";
                mensaje.textContent = preguntas[indicePregunta].mensaje[index];
                mensaje.style.color = "green";
                respuestasCorrectas++;
            } else {
                botones[index].style.backgroundColor = "red";
                mensaje.textContent = preguntas[indicePregunta].mensaje[index];
                mensaje.style.color = "red";
            }
            document.getElementById("siguiente").disabled = false;
            botones.forEach(boton => boton.disabled = true);
        }

        function siguientePregunta() {
            indicePregunta++;
            if (indicePregunta < preguntas.length) {
                mostrarPregunta();
            } else {
                mostrarResultado();
            }
        }

        function mostrarResultado() {
            let mensajeFinal = "";
            if (respuestasCorrectas <= 3) {
                mensajeFinal = "¡Oh, no! Aún falta que revises la web de El Comercio, específicamente la sección de Economía y Día 1 para que te enteres de todo sobre el Impuesto a la Renta. ¡Suscríbete😉! ";
            } else if (respuestasCorrectas <= 7) {
                mensajeFinal = "¡Vamos que casi se logra! Solo una revisión más a la web de El Comercio y ya estamos con el conocimiento a tope sobre el Impuesto a la Renta. ¡Suscríbete! 😉.";
            } else {
                mensajeFinal = "¡Qué crack!  Seguro te llaman el / la Messi de los Impuestos.  Mantente informado para que no pierdas ese conocimiento y la oportunidad de acceder a nuestro contenido exclusivo. ¡Suscríbete a El Comercio! 😉.";
            }
            document.getElementById("quiz").innerHTML = `<h2>Test finalizado</h2><p>Respuestas correctas: ${respuestasCorrectas} de ${preguntas.length}</p><p>${mensajeFinal}</p><button onclick='reiniciarTest()' id='reset'>Reiniciar Test</button>`;
        }

        function reiniciarTest() {
            indicePregunta = 0;
            respuestasCorrectas = 0;
            mostrarPregunta();
        }

        document.addEventListener("DOMContentLoaded", mostrarPregunta);