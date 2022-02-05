const express = require("express");
const router = express.Router();
const catRoutes=require("../controller/category.models")

//post
router.post("/", catRoutes.add_category);

//get
router.get("/", catRoutes.get_category);

//get single
router.get("/:categoryId", catRoutes.get_single_category);

//delete
router.delete("/:categoryId", catRoutes.delete_category);

//put request
router.put("/:categoryId", catRoutes.update_category);

module.exports = router;

