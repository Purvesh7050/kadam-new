const express = require("express");
const {
  addCategory,
  getShowingCategory,
  addAllCategory,
} = require("../controller/categoryController");

const router = express.Router();

//add a category
router.post("/add", addCategory);
//add all category
router.post("/add-all", addAllCategory);
//get only showing category
router.get("/show", getShowingCategory);

module.exports = router;
