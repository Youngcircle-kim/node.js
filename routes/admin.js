import express from "express";
import path from "path";

const router = express.Router();

const __dirname = path.resolve();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', { padgeTitle: 'Add Product'});
});

router.post("/add-product", (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect("/");
});

export default {
  router, 
  products    
};
