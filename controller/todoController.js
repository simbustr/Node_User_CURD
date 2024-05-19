const Todo = require("../model/todoModel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

const deleteTodo = async (req, res) => {
  
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (deleteTodo) {
      res.json(deletedTodo);
    } else {
      res.status(404).json({ message: "To-do item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
    getAllTodos,
  createTodo,
  deleteTodo
};
