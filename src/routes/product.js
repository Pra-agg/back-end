const express = require("express")
const Router = express.Router();
const {createProduct}=require("../controller/product")
const{requireSignin, adminMiddleware} = require("../common-middleware")
const jwt = require("jsonwebtoken")
const Product = require("../models/product")
const multer = require("multer");
const path = require("path")
const shortid = require("shortid")

const storage = multer.diskStorage({
   
        destination: function (req, file, cb) {
          cb(null, path.join(path.dirname(__dirname),"uploads"))
        },
        filename: function (req, file, cb) {
          cb(null, shortid.generate()+ "-" + file.originalname)
        }
    
})
const upload = multer ({storage})

Router.post('/product/create', requireSignin, adminMiddleware,upload.array("productPicture"), createProduct);
// Router.get('/product/getcategory',getCategories);



module.exports = Router;