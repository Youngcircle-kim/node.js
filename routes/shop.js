import express from "express";
import path from "path";

const __dirname = path.resolve();
import adminData from './admin.js';

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log('shop.js',adminData.product);
    res.sendFile(path.join(__dirname, ".", "views", "shop.html"));
});

export default router;