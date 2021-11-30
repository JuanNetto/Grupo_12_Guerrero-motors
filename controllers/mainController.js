const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const fs = require("fs");
let sitcoms = fs.readFileSync('./database/productos.json', "utf-8");
let reproductos = JSON.parse(sitcoms)


const controlador = {
    home: (req, res) => {
        res.render('home.ejs')},
    compare: (req, res) => {
        res.render('compare.ejs')},
    product: (req, res) => {
        res.render('Product.ejs')},
    login: (req, res) => {
        res.render('login.ejs')},
    signup: (req, res) => {
        res.render('signup.ejs')},
    agregar: (req, res) => {
        res.render('agregar.ejs')},
    editar: (req, res) => { 
        res.render('editar.ejs',{reproductos})},
    lista: (req, res)=> {
        res.render('carsList.ejs',{reproductos})},
    agregarPost: (req, res) => {
        reproductos.push(req.body);
        var listanueva = JSON.stringify(reproductos);
        fs.writeFileSync('./database/productos.json',listanueva);
        res.redirect('/');
    },                
         
    mostrarAuto: (req, res) => {
        let auto;
        for (i=0; i< reproductos.length; i++){
            if (reproductos[i].id==req.params.id){
                auto = reproductos[i];
            }
        }
        res.render('editarAuto.ejs',{auto});
    },
    editarAuto: (req,res) => {
        console.log("llegue");
        var autoId = req.body.id;
        console.log(autoId);
        for (let i=0; i< reproductos.length; i++){
            if (reproductos[i].id==autoId){
                reproductos[i] = req.body;
            }
        }
        let archivo = JSON.stringify(reproductos);
        fs.writeFileSync('./database/productos.json', archivo);
        res.redirect("/");
    }    

}

module.exports=controlador;