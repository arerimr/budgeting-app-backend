const express = require('express')

const app = express()

app.use(express.json())

const budgetListController = require('./controllers/budgetListController.js')

app.use('/list', budgetListController)

app.get("/", (req, res) => {
    res.send("hello hello")
})


module.exports = app