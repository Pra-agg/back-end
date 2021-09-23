const express = require("express")
const Router = express.Router();
const { addItemToCart}=require("../controller/cart")
const{requireSignin, userMiddleware} = require("../common-middleware")


Router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);




module.exports = Router; 