const express = require('express')

const budget = express.Router()

const budgetListArr = require('../models/budgetList.js')

budget.get("/", (req, res)=>{
    res.status(200).send(budgetListArr)
})

module.exports = budget