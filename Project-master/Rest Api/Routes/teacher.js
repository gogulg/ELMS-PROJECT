const express = require("express");
const router = express.Router();
const teacherRoutes = require("../Controller/teacher.models");

//post
router.post("/",teacherRoutes.add_log_teacher);

//get
router.get("/", teacherRoutes.get_log_teacher);
 
module.exports = router;
