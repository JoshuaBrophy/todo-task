// handler functions that will be executed 

const Todo = require("../models/todo")

const getTodos = async (req, res) => {
    try {
        // find all items from a mongoose Model method 
        const items = await Todo.find({})
        // respond with an object that has a message and the items from the DB
        res.json({
            message: "all items",
            todos: items
        })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

const getTodo = async (req, res) => {
    try {
        // get id from ':id' param from the route (the :id in the route path)
        const { id } = req.params
        // find todo with Model.findById()
        const todo = await Todo.findById(id)
        // response (res) with .json with the todo found
        if (!todo) {
            return res.status(404).json({ message: "Todo not found"})
        }
        res.status(200).json(todo)
    } catch (error) {
        res.status (500).json({ error: error.message})
    }
};

const createTodo = async (req, res) => {
    try{
        // get the text from the req.body
        const {text} = req.body;
          // create new todo object with model
        const newTodo = new Todo({
            text: text
        })
          // await for it to be saved
        await newTodo.save();
            // respond with json()
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const editTodo = async (req, res) => {
    try {
         // get id from ':id' param from the route
        const { id } = req.params;
         // use mongoose model method findByIdAndUpdate
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true})
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
     // get id from ':id' param from the route
        const { id } = req.params
         // use mongoose model method findByIdAndDelete
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}