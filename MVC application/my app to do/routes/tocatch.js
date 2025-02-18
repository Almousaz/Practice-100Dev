const express = require("express");
const router = express.Router();
const tocatchController = require("../controllers/tocatch");

router.get("/", tocatchController.getTocatch);

router.post("/createTocatch", tocatchController.createTocatch);

router.put("/markComplete", tocatchController.markComplete);

router.put("/markIncomplete", tocatchController.markIncomplete);

router.delete("/deleteTodo", tocatchController.deleteTocatch);

module.exports = router;
