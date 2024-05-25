import express from "express";
const router = express.Router();

import complaint from "../controllers/complainController.js";
router.route("/complain").post(complaint);

export default router;


