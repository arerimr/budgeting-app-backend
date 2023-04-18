const express = require('express')

const app = express()

const cors = require("cors")

app.use(cors())

app.use(express.json())

const budgetListController = require('./controllers/budgetListController.js')

app.use('/transactions', budgetListController)

app.get("/", (req, res) => {
    res.send("hello hello")
})

app.get("*", (req, res) => {
    res.status(404).send("page/log does not exist")
})

module.exports = app