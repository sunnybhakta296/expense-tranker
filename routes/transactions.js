const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction, getTransaction } = require('../controllers/transactions');


router
  .route('/:clientId')
  .get(getTransaction)
  .post(addTransaction);

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;