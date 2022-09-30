import express from "express";
import path from "path";
import admin from "./admin.js";

const __dirname = path.resolve();
import adminData from './admin.js';

const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

export default router; 