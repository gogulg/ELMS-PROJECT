const express = require("express");
const router = express.Router();
const courseRoutes = require("../controller/course.models");

//post
router.post("/", courseRoutes.add_course);

//get
router.get("/", courseRoutes.get_course);

//get single
router.get("/:courseId", courseRoutes.get_single_course);

//delete
router.delete("/:courseId", courseRoutes.delete_course);

//put request
router.put("/:courseId", courseRoutes.update_course);

module.exports = router;
