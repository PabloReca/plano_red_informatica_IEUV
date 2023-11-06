// api/diagram.js
const axios = require('axios');

module.exports = async (req, res) => {
    const url = 'https://app.diagrams.net/#G1LBtW6XMQYwy65UnvyVMSShaMpL8YcZ6N';

    try {
        // Realizar una petición HTTP GET para obtener el archivo .drawio
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'arraybuffer', // Importante para archivos binarios
        });

        // Convertir el buffer a string y luego a base64
        const diagramData = Buffer.from(response.data, 'binary').toString('base64');

        // Devolver el contenido SVG directamente (o una URL a él, si lo guardaste en algún lugar)
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(`data:image/svg+xml;base64,${diagramData}`);
    } catch (error) {
        res.status(500).send('Error al obtener el diagrama.');
    }
};
