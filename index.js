const express = require('express');
require('dotenv/config');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const session = require("express-session");
app.use(session({
    secret: 'biblioteca',
    saveUninitialized: false,
    resave: false
}));
const BibliotecarioModel = require("./models/BibliotecarioModel");
const ReservaModel = require("./models/ReservaModel");
const UsuarioModel = require("./models/UsuarioModel");
app.set('view engine', 'ejs');

const bibliotecarioRoutes = require("./routes/bibliotecarioRoutes");
app.use(bibliotecarioRoutes);

const reservaRoutes = require("./routes/reservaRoutes");
app.use(reservaRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);

app.get("/", function(req, res){
    const usuario = {
        nome: "João",
        email: "j@gmail.com",
        senha: "*****"
    };
    
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
   
});

   
app.listen(process.env.PORT, function(){
    console.log("Servidor iniciado");
});