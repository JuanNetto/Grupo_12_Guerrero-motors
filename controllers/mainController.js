const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const controlador = {
    home: (req, res) => {
        res.render('home.ejs')},
    compare: (req, res) => {
        res.render('compare.ejs')},
    Product: (req, res) => {
        res.render('Product.ejs')},
 
    //login : (req, res) => {}
    //compare : (req, res) => {}
}

module.exports=controlador;