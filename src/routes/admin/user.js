const express = require ("express");
const { requireSignin } = require("../../common-middleware");
const { signup , signin , signout} = require("../../controller/admin/user");
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require("../../validators/user");
const router = express.Router();



router.post("/admin/signin",validateSigninRequest,isRequestValidated,signin);


router.post("/admin/signup",validateSignupRequest, isRequestValidated,signup);

router.post("/admin/signout" ,signout);

// router.post("/profile",requireSignin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// })






module.exports = router;