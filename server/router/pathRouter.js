import express from "express";
const router = express.Router();
import pathcontroller from "../controllers/pathController.js";
import {signup,login} from "../validators/path-validator.js";
//import login from "../validators/path-validator.js";
import validation from "../middlewares/signupMW.js";

router.route("/").get(pathcontroller.home);
router.route("/register").post(validation(signup),pathcontroller.register);
router.route("/login").post(validation(login),pathcontroller.login);
router.route("/user").get(pathcontroller.user);

export default router;
