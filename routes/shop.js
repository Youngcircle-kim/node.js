import express from "express";
import path from "path";

const __dirname = path.resolve();
import adminData from './admin.js';

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('shop');
});

export default router; 