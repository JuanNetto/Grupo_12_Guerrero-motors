//var express = require('express');
//var Router = express.Router();

// ************ Controller Require ************
//const cartController = require('../controllers/cartController');

// Router.get('/cart', cartController.cart);

// Router.post('/cart/addTocart', cartController.addCart);
// Router.post('/cart/deleteTocart', cartController.deleteCart);
// Router.post('/cart/shop', cartController.shop);
// Router.get('/cart/buyHistory',  cartController.buyHistory);
// Router.get('/cart/buyDetail/:id', cartController.buyDetail);

const router = {

    cart: '/cart'
}

module.exports = router;
