const router = require('express').Router();

const Expense = require('./expense');

router
    .route('/')
    .get((req, res) => {
        Expense
        .find()
            .populate('budget')
            .populate('category')
            .then(expenses => res.json(expense))
            .catch(err => res.status(500).json({error: err}));
        })
        
        .post((req, res) => {
            const { amount, description, budget, category } = req.body;
            const newExpense = new Expense({ amount, description, budget, category });
            newExpense
            .save()
            .then(expenses => res.join(expenses))
            .catch(err => res.status(500).json({error: err}));
    })

module.exports = router;