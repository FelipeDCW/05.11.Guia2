const fs = require('fs')
const express = require('express')
const app = express()

app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('inicio2')
})

app.get('/crear',(req, res)=>{
    const parametros = req.query
    fs.writeFile(`${parametros.nombre}.txt`,parametros.contenido,()=>{        
    })
})

app.get('/leer',(req, res)=>{
    const parametros = req.query
    fs.readFile(`${parametros.nombre}.txt`,(err, datos)=>{        
        console.log('Lectura exitosa', datos.toString());
    })
    
})

app.get('/renombrar',(req, res)=>{
    const parametros = req.query
    if (fs.existsSync(`${parametros.nombre}.txt`)){
        fs.renameSync(`${parametros.nombre}.txt`,`${parametros.nuevonombre}.txt`)
    }else{
        console.log('El archivo no existe');
    }    
})

app.get('/eliminar',(req, res)=>{
    const parametros = req.query
    try {
        fs.unlink(`${parametros.nombre}.txt`,()=>{
            console.log('El archivo se borro existosamente');
        })    
    } catch (error) {
        res.send(error)
    }
    
})


app.listen(3000,()=>{
    console.log('Escuchando por el 3000');
})