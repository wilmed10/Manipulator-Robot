document.addEventListener('DOMContentLoaded', () => {
    const jsonDataDisplay = document.getElementById('json-data');
    const crearArchivo = document.getElementById('crearArchivo');
    const btnManipulacion = document.getElementById('btn-manipulacion');
    const btnSeguimiento = document.getElementById('btn-seguimiento');
    const btnAdelante = document.getElementById('btn-adelante');
    const btnDerecha = document.getElementById('btn-derecha');
    const btnIzquierda = document.getElementById('btn-izquierda');
    const btnAtras = document.getElementById('btn-atras');
    const sld1 = document.getElementById('hombro-izq');
    const sld2 = document.getElementById('biceps-izq');
    const sld3 = document.getElementById('codo-izq');
    const sld4 = document.getElementById('antebrazo-izq');
    const sld5 = document.getElementById('gripper-izq');
    const sld6 = document.getElementById('hombro-der');
    const sld7 = document.getElementById('biceps-der');
    const sld8 = document.getElementById('codo-der');
    const sld9 = document.getElementById('antebrazo-der');
    const sld10 = document.getElementById('gripper-der');
    const cn1 = document.getElementById('cajaNumeral1');
    const cn2 = document.getElementById('cajaNumeral2');
    const cn3 = document.getElementById('cajaNumeral3');
    const cn4 = document.getElementById('cajaNumeral4');
    const cn5 = document.getElementById('cajaNumeral5');
    const cn6 = document.getElementById('cajaNumeral6');
    const cn7 = document.getElementById('cajaNumeral7');
    const cn8 = document.getElementById('cajaNumeral8');
    const cn9 = document.getElementById('cajaNumeral9');
    const cn10 = document.getElementById('cajaNumeral10');

    /* ------------------- Camara ------------------- */
    'use strict';

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snap = document.getElementById('snap');
    const errorMsgElement = document.querySelector('span#errorMsg');

    const constraints = {
    audio: true,
    video: {
        width: 360, height: 240
    }
    };

    // Access webcam
    async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
    }

    // Success
    function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
    }

    // Load init
    init();

    // Draw image
    var context = canvas.getContext('2d');
    snap.addEventListener("click", function() {
            context.drawImage(video, 0, 0, 360, 240);
    });

    /* ------------------- T. Camara ------------------- */

    // Función para cargar y mostrar el archivo JSON
    function cargarJSON() {
        fetch('/data.json') // Actualiza la ruta para cargar el archivo JSON
            .then(response => response.json())
            .then(data => {
                jsonDataDisplay.textContent = JSON.stringify(data, null, 4);
            })
            .catch(error => {
                jsonDataDisplay.textContent = 'Error al cargar el JSON: ' + error;
            });
    }

    cargarJSON();

    // Función para crear un nuevo archivo JSON en el servidor
    crearArchivo.addEventListener("click", function () {
        fetch('/crearArchivo', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cargarJSON(); // Vuelve a cargar el JSON después de crearlo
        })
        .catch(error => {
            console.error('Error al crear el archivo JSON:', error);
        });
    });

    function mov(com,valor) {
        nuevaEdad = valor;
        console.log("El botón está presionado.");
        fetch(com, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nuevaEdad }),
        })
        .then(response => response.json())
        .then(data => {
            jsonDataDisplay.textContent = JSON.stringify(data, null, 4);
        })
        .catch(error => {
            jsonDataDisplay.textContent = 'Error al guardar el JSON: ' + error;
        });
    }

    function quieto() {
        console.log('no presionado');
        fetch('/quieto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nuevaEdad }),
        })
        .then(response => response.json())
        .then(data => {
            jsonDataDisplay.textContent = JSON.stringify(data, null, 4);
        })
        .catch(error => {
            jsonDataDisplay.textContent = 'Error al guardar el JSON: ' + error;
        });
    }

    btnAdelante.addEventListener("mousedown", function() {
        console.log('presionado');
        mov('/adelante','adelante');
    });

    btnAdelante.addEventListener("mouseup", function() {
        quieto();
    });

    btnDerecha.addEventListener("mousedown", function() {
        console.log('presionado');
        mov('/derecha','derecha');
    });

    btnDerecha.addEventListener("mouseup", function() {
        quieto();
    });

    btnIzquierda.addEventListener("mousedown", function() {
        console.log('presionado');
        mov('/Izquierda','Izquierda');
    });

    btnIzquierda.addEventListener("mouseup", function() {
        quieto();
    });

    btnAtras.addEventListener("mousedown", function() {
        console.log('presionado');
        mov('/atras','atras');
    });

    btnAtras.addEventListener("mouseup", function() {
        quieto();
    });

    btnSeguimiento.addEventListener("click", function() {
        console.log('presionado');
        mov('/modoSeguimiento','seguir');
    });

    btnManipulacion.addEventListener("click", function() {
        console.log('presionado');
        mov('/modoManipulacion','seguir');
    });

    /* ------------------ SERVOS --------------------- */

    function serv(com,servo) {
        const valorSlider = servo.value;
        // Enviar el valor del slider al servidor
        fetch(com, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ valorSlider }), // Envia el valor del slider al servidor
        })
        .then(response => response.json())
        .then(data => {
            jsonDataDisplay.textContent = JSON.stringify(data, null, 4);
        })
        .catch(error => {
            jsonDataDisplay.textContent = 'Error al enviar el valor del slider: ' + error;
        });
    }

    sld1.addEventListener("input", function() {
        console.log('slider1');
        serv('/sld1',sld1);
        cn1.innerHTML = sld1.value;
    });
    sld2.addEventListener("input", function() {
        console.log('slider2');
        serv('/sld2',sld2);
        cn2.innerHTML = sld2.value;
    });
    sld3.addEventListener("input", function() {
        console.log('slider3');
        serv('/sld3',sld3);
        cn3.innerHTML = sld3.value;
    });
    sld4.addEventListener("input", function() {
        console.log('slider4');
        serv('/sld4',sld4);
        cn4.innerHTML = sld4.value;
    });
    sld5.addEventListener("input", function() {
        console.log('slider5');
        serv('/sld5',sld5);
        cn5.innerHTML = sld5.value;
    });
    sld6.addEventListener("input", function() {
        console.log('slider6');
        serv('/sld6',sld6);
        cn6.innerHTML = sld6.value;
    });
    sld7.addEventListener("input", function() {
        console.log('slider7');
        serv('/sld7',sld7);
        cn7.innerHTML = sld7.value;
    });
    sld8.addEventListener("input", function() {
        console.log('slider8');
        serv('/sld8',sld8);
        cn8.innerHTML = sld8.value;
    });
    sld9.addEventListener("input", function() {
        console.log('slider9');
        serv('/sld9',sld9);
        cn9.innerHTML = sld9.value;
    });
    sld10.addEventListener("input", function() {
        console.log('slider10');
        serv('/sld10',sld10);
        cn10.innerHTML = sld10.value;
    });

});
