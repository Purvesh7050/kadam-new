const express = require("express");
const {
  addProduct,
  addAllProducts,
  getShowingProducts,
  getDiscountProduct,
  getSingleProduct,
  getRelatedProducts,
} = require("../controller/productController");

// router
const router = express.Router();

// add a products
router.post("/add", addProduct);
// add all products
router.post("/add-all", addAllProducts);
// get showing products
router.get("/show", getShowingProducts);
// get discount products
router.get("/discount", getDiscountProduct);
router.get("/relatedProduct", getRelatedProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
