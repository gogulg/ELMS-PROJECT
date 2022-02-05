const express = require("express");
const router = express.Router();
const logRoutes = require("../Controller/login.models");

//post
router.post("/",logRoutes.add_log_dtls);

//get
router.get("/", logRoutes.get_log_dtls);

//get single
router.get("/:loginId", logRoutes.get_single_log_dtls);

//put request
router.put("/:loginId", logRoutes.update_log_dtls);

module.exports = router;
