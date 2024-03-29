import express from "express";
import { Router } from 'express';
const router = Router();
import pathcontroller from '../controllers/path-controller.js';

router.route("/").get(pathcontroller.home);
router.route("/register").post(pathcontroller.register);
router.route("/login").get(pathcontroller.login);
router.route("/user").get(pathcontroller.user);

export default router;