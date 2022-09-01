const express = require("express");
const app = require("../app");
const router = express.Router();
const { loginUser, singupUser } = require("../controllers/UserController");

//logIN
router.post("/login", loginUser);
//SingUp
router.post("/singup", singupUser);

module.exports = router;
