const express = require("express");
const router = express.Router();
const entryRoutes = require("../Controller/entry.models");

//post
router.post("/", entryRoutes.add_entry);

//get
router.get("/", entryRoutes.get_entry);

//get single
router.get("/:entryId", entryRoutes.get_single_entry);

//delete
router.delete("/:entryId", entryRoutes.delete_entry);

//put request
router.put("/:entryId", entryRoutes.update_entry);

module.exports = router;
