const express = require("express");
const router = express.Router();
const studentRoutes = require("../Controller/student.models");

//post
router.post("/", studentRoutes.add_student);

//get
router.get("/", studentRoutes.get_student);

//get single
router.get("/:studentId", studentRoutes.get_single_student);

//delete
router.delete("/:studentId", studentRoutes.delete_student);

//put request
router.put("/:studnetId", studentRoutes.update_student);

module.exports = router;
