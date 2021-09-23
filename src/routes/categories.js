const express = require("express")
const Router = express.Router();
const {addCategory,getCategories}=require("../controller/categories")
const{requireSignin, adminMiddleware} = require("../common-middleware")
const jwt = require("jsonwebtoken")
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

Router.post('/category/create', requireSignin, adminMiddleware,upload.single("categoryImage"), addCategory);
Router.get('/category/getcategory',getCategories);



module.exports = Router;
