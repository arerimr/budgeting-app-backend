const express = require('express')

const budget = express.Router()

const budgetListArr = require('../models/budgetList.js')

budget.get("/", (req, res) => {
    res.status(200).send(budgetListArr)
})

budget.get("/:id", (req, res) => {
    const { id } = req.params
    const item = budgetListArr[id]
    item ? res.status(200).send(item) : res.status(200).redirect("/")
})

budget.post('/', (req, res) => {
    const newItem = req.body
    budgetListArr.push(newItem)
    res.status(200).send(budgetListArr)
})

budget.delete('/:id', (req, res) => {
    const { id } = req.params
    const deletedItem = budgetListArr.splice(id, 1)
    res.status(200).send(deletedItem)
})

budget.put(':id', (req, res) => {
    const { id } = req.params
    const updatedItem = req.body
    budgetListArr[id] ? res.status(200).send(updatedItem) : res.status(200).redirect('/')
})

module.exports = budget