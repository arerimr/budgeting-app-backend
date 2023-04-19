const express = require('express')

const budget = express.Router()

const budgetListArr = require('../models/budgetList.js').sort((a, b) => new Date(b.date) - new Date(a.date))

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

budget.put(':index', (req, res) => {
    const { index } = req.params
    if (budgetListArr[index]){
        budgetListArr[index] = req.body
        res.status(200).json(budgetListArr[index])
    } else{
        res.status(404).redirect('/')
    }
})

module.exports = budget