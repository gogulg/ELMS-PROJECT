const express = require("express");
const router = express.Router();
const plannerRoutes = require("../Controller/planner.models");

//post
router.post("/", plannerRoutes.add_planner);

//get
router.get("/", plannerRoutes.get_planner);

//get single
router.get("/:plannerId", plannerRoutes.get_single_planner);

//delete
router.delete("/:plannerId", plannerRoutes.delete_planner);

//put request
router.put("/:plannerId", plannerRoutes.update_planner);

module.exports = router;
