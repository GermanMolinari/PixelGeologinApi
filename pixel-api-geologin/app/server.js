const express = require('express');
const router = require('./router/index');

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Servidor ejecutandose')
});

app.use('/api', router);

const PUERTO = process.env.PUERTO || 3200;

app.listen(PUERTO, () => {
    console.log('Servidor corriendo en el puerto ', PUERTO);
});