const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const dataFilePath = 'data.json';
// Verificar si el archivo data.json existe
if (!fs.existsSync(dataFilePath)) {
    // Crear un objeto JSON con los valores iniciales
    const initialValues = {
        modo: '',
        despl: 'quieto',
        sld1: '0',
        sld2: '0',
        sld3: '0',
        sld4: '0',
        sld5: '0',
        sld6: '0',
        sld7: '0',
        sld8: '0',
        sld9: '0',
        sld10: '0'
    };

    // Escribir el archivo JSON inicial
    fs.writeFileSync(dataFilePath, JSON.stringify(initialValues, null, 4));
}

// Ruta para modificar el JSON existente
app.put('/adelante', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.despl = 'adelante';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

// Ruta para modificar el JSON existente
app.put('/derecha', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.despl = 'derecha';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

// Ruta para modificar el JSON existente
app.put('/izquierda', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.despl = 'izquierda';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

// Ruta para modificar el JSON existente
app.put('/atras', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.despl = 'atras';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

app.put('/quieto', (req, res) => {

    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.despl = 'quieto';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

app.put('/modoSeguimiento', (req, res) => {

    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.modo = 'Seguimiento';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

app.put('/modoManipulacion', (req, res) => {

    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Modificar los datos según sea necesario
        datos.modo = 'Manipulacion';

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Archivo JSON modificado exitosamente.');
            return res.json({ mensaje: 'Archivo JSON modificado exitosamente' });
        });
    });
});

app.put('/sld1', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld1 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld2', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld2 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld3', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld3 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld4', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld4 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld5', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld5 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld6', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld6 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld7', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld7 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld8', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld8 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld9', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld9 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

app.put('/sld10', (req, res) => {
    // Leer el archivo JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        // Parsear el contenido existente del archivo JSON
        const datos = JSON.parse(data);

        // Obtener el valor del slider desde la solicitud
        const valorSlider = req.body.valorSlider; // Asegúrate de que esto coincida con la estructura de tu solicitud

        // Agregar el valor del slider al objeto JSON
        datos.sld10 = valorSlider;

        // Escribir el archivo JSON modificado
        fs.writeFile('data.json', JSON.stringify(datos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return res.status(500).json({ error: 'Error al escribir en el archivo' });
            }

            console.log('Valor del slider agregado al archivo JSON exitosamente.');
            return res.json({ mensaje: 'Valor del slider agregado al archivo JSON exitosamente' });
        });
    });
});

// Ruta para crear un nuevo archivo JSON a través de una solicitud POST
app.post('/crearArchivo', (req, res) => {
    const nuevoArchivo = {
        modo: '',
        despl: 'quieto',
        sld1: '0',
        sld2: '0',
        sld3: '0',
        sld4: '0',
        sld5: '0',
        sld6: '0',
        sld7: '0',
        sld8: '0',
        sld9: '0',
        sld10: '0'
    };

    fs.writeFile('data.json', JSON.stringify(nuevoArchivo, null, 4), 'utf8', (err) => {
        if (err) {
            console.error('Error al crear el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al crear el archivo JSON' });
        }

        console.log('Archivo JSON creado exitosamente en el servidor.');
        return res.json({ mensaje: 'Archivo JSON creado exitosamente en el servidor' });
    });
});

// Configura el servidor para servir archivos estáticos
app.use(express.static(__dirname));

// Ruta para servir el archivo index.html en la URL raíz '/'
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
});

// Ruta para servir el archivo client.js con el tipo MIME correcto
app.get('/client.js', (req, res) => {
    const clientPath = path.join(__dirname, 'client.js');
    res.set('Content-Type', 'text/javascript'); // Establece el tipo MIME a 'text/javascript'
    res.sendFile(clientPath);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
