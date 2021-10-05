const express = require("express");
const app = express();
app.use(express.static('./public'));
const controlador = require('./controllers/mainController');
const rutas = require('./routers/main');

app.set('view engine', 'ejs');

app.listen(3000, ()=>{
console.log('servidor funcionando');
});

app.get(rutas.home, controlador.home)


app.get(rutas.compare , controlador.compare)

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html');
})

app.get('/product', (req, res) =>{
    res.sendFile(__dirname + '/views/Product.html');
})

app.get('/cart', (req, res) =>{
    res.sendFile(__dirname + '/views/cart.html');
})

app.get('/signup', (req, res) =>{
    res.sendFile(__dirname + '/views/signup.html');
})