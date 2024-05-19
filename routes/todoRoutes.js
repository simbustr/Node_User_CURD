const express = require('express');
const todoController = require('../controller/todoController');
const router = express.Router();





router.get("/todos",todoController.getAllTodos)
router.get('/todos/:id', todoController.getTodoById);
router.post("/todos",todoController.createTodo)
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);





module.exports = router;