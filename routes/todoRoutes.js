const express = require('express');
const todoController = require('../controller/todoController');
const router = express.Router();





router.get("/todos",todoController.getAllTodos)
router.post("/todos",todoController.createTodo)

router.delete('/todos/:id', todoController.deleteTodo);





module.exports = router;