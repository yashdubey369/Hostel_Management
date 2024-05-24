import express from "express";
import { Router } from "express";
const router = Router();
import pathcontroller from "../controllers/path-controller.js";
import signupSchema from "../validators/path-validator.js";
import validate from "../middlewares/validateMW.js";

router.route("/").get(pathcontroller.home);
router.route("/register").post(validate(signupSchema),pathcontroller.register);
router.route("/login").post(pathcontroller.login);
router.route("/user").get(pathcontroller.user);

export default router;
