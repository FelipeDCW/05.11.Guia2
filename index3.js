const fs = require('fs')
const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    fs.writeFile('saludo.txt', 'Hola Mundo', () => {
        fs.readFile('saludo.txt', (err, datos) => {
            datos = datos.toString();
            console.log(datos);
            res.render('index', {datos})
        })
    })
})

app.listen(3000, () => {
    console.log('Escuchando por el 3000');
})