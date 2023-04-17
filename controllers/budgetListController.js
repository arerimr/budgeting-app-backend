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

budget.post('/', (req, res)=>{
    const newItem = req.body
    budgetListArr.push(newItem)
    res.status(200).send(budgetListArr)
})

module.exports = budget