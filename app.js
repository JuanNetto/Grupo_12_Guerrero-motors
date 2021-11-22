const express = require("express");
const app = express();
app.use(express.static('./public'));
const controlador = require('./controllers/mainController');
const rutas = require('./routers/main');
const cartController = require('./controllers/cartController');
const cartRoutes = require('./routers/cartRoutes');
app.use(express.urlencoded ( { extended: false } ) );
app.use(express.json());

app.set('view engine', 'ejs');

app.listen(3000, ()=>{
console.log('servidor funcionando');
});

app.get(rutas.home, controlador.home);

app.get(rutas.compare , controlador.compare);

app.get(rutas.products, controlador.product);

app.get(rutas.login, controlador.login);

app.get(rutas.signup, controlador.signup);

app.get(rutas.editar, controlador.editar);
app.post(rutas.editar, controlador.editarPost);

app.get(rutas.agregar, controlador.agregar);
app.post(rutas.agregar, controlador.agregarPost);

app.get(rutas.lista, controlador.lista);

// Reemplazo por implementacion de EJS -> Accede via -> Ruta / Controlador.
//app.get('/cart', (req, res) =>{
//    res.sendFile(__dirname + '/views/cart.html');
//})
app.get(cartRoutes.cart, cartController.cart)
