const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getTodos)
router.delete('/item/:id', itemsController.deleteTodo)
router.post('/item',itemsController.createTodo)
router.patch()

module.exports = router

