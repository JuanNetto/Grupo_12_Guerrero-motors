const express = require("express");
const app = express();
app.set('view engine', 'ejs');

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
 
    //login : (req, res) => {}
    //compare : (req, res) => {}
}

module.exports=controlador;