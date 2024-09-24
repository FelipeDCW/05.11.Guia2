const express = require('express')
const hbs = require('hbs')
const app = express()

hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");


app.get("/ventas", (req, res)=> {   
    res.render("Ventas", { layout: "Ventas", 
                    usuario: "Felipe", 
                    ventas: [14990, 42490, 22500], });
});

app.listen(3000, () => {
    console.log('Escuchando por el 3000');
})