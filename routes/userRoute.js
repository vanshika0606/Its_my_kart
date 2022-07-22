const express = require("express");
const { registerUser ,getAlluser, deleteUser, updateUser
    //  loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, , getSingleuser, updateuserRole,  
} = require("../controllers/userController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router =  express.Router();




router.route("/register").post(registerUser);

router.route("/users").get( getAlluser);

router.route("/user/:id").put(updateUser).delete(deleteUser);



module.exports = router;