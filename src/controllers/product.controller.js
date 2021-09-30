const express = require ("express");

const Product = require("../models/product.model.js");

const router = express.Router();

router.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    res.send({product});
  });
 
  console.log("sagar");
  router.get("/", async (req, res) => {
    console.log("def");
   
    const products = await Product.find().lean().exec();
    // res.send({products});
    res.render("products.ejs", {products})
    // return res.render("ejs/proucts", {products});
  });

  // Routes for categories  61544567ad3539c189464228

  router.get("/type/:id", async (req, res) => {
    console.log("req:", req.params.id);
    const products = await Product.find({ category : {$eq:`${req.params.id}`}}).lean().exec();
    console.log({products});
      // res.send({products});
      res.render("products.ejs", {products});
    
  });
  
  
  
  module.exports = router;