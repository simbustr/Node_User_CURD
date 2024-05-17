var express = require("express");
var router = express.Router();
const studentController = require("../controller/student");

// Create a new todo item
router.post("/", studentController.createStudent);

// Get all items
router.get("/", studentController.getAllStudent);


// Update a todo item
router.put("/:id", studentController.updateStudent);



// Delete a todo item
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
