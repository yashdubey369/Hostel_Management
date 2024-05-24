import express from "express";
import { Router } from "express";
const router = Router();
import pathcontroller from "../controllers/path-controller.js";
import signup from "../validators/path-validator.js";
import validation from "../middlewares/validateMW.js";

router.route("/").get(pathcontroller.home);
router.route("/register").post(validation(signup),pathcontroller.register);
router.route("/login").post(pathcontroller.login);
router.route("/user").get(pathcontroller.user);

export default router;
