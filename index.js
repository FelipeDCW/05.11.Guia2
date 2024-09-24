const express = require('express')
const hbs = require('hbs')
const app = express()

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");


app.get("/", (req, res)  => {   
    res.render("Inicio", { layout: "Inicio" }); 
});

app.get("/Contactos", (req, res)  => {   
    res.render("Inicio", { layout: "Contactos" }); 
});

app.get("/Galeria", (req, res) => {   
    res.render("Inicio", { layout: "Galeria" }); 
});

app.get('/',(req,res)=>{
    res.send('Hola')
})

app.listen(3000,()=>{
    console.log('Escuchando por el 3000');
})