const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const fs = require("fs");
let sitcoms = fs.readFileSync('./database/productos.json', "utf-8");
const reproductos = JSON.parse(sitcoms)

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
    editarPost: (req, res) => {
        var id = req.body;
        res.redirect('/editar/:id')
    },     
    lista: (req, res)=> {
        res.render('carsList.ejs')},    
    agregarPost: (req, res) => {
        let autonuevo = JSON.stringify(req.body);
        fs.appendFileSync('./database/productos.json',autonuevo);
        res.redirect('/');
    },      

    lista: (req, res)=> {
        res.render('carsList.ejs')},            
         
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
        for (i=0; i< reproductos.length; i++){
            if (reproductos[i].id==req.params.id){
                reproductos[i]=req.body;
            }
        }
        let archivo = JSON.stringify(reproductos);
        fs.writeFile('./database/productos.json', archivo);
        res.redirect("/");
    }    
    //login : (req, res) => {}
    //compare : (req, res) => {}
}

module.exports=controlador;