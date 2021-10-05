const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const cartController = {

    cart: (req, res) => {
        res.render('./cart/cart.ejs')
    }

}

module.exports=cartController;