const express = require("express");
const app = express();
app.use(express.static('./public'));

app.listen(3000, ()=>{
console.log('servidor funcionando');
console.log('servidor funcionando');
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/compare', (req, res)=>{
    res.sendFile(__dirname + '/views/compare.html');
});

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