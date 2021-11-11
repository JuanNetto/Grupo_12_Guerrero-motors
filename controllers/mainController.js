const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const fs = require("fs");
let sitcoms = fs.readFileSync('./database/productos.json', "utf-8");

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
        res.render('editar.ejs')}, 
    lista: (req, res)=> {
        res.render('carsList.ejs')},    
    agregarPost: (req, res) => {
        let autonuevo = JSON.stringify(req.body);
        console.log(autonuevo);
        fs.appendFileSync('./database/productos.json',autonuevo);
        res.redirect('/');
    },      
    //login : (req, res) => {}
    //compare : (req, res) => {}
}

module.exports=controlador;