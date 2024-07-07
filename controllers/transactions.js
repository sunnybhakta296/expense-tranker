const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
// exports.getTransactions = async (req, res, next) => {
//   const clientId = req.params.clientId
//   console.log(clientId, "pppppppppppppppppppp")
//   try {
//     const transactions = await Transaction.find();

//     return res.status(200).json({
//       success: true,
//       count: transactions.length,
//       data: transactions
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       error: 'Server Error'
//     });
//   }
// }

exports.getTransactions = async (req, res, next) => {}

exports.getTransaction = async (req, res, next) => {
  const clientId = req.params.clientId
  try {
    const transactions = await Transaction.findOne({clientId: clientId});

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try {
    const clientId = req.params.clientId

    const body = {...req.body, clientId: clientId}
console.log(body, "body................")
    const transaction = await Transaction.create(body);
  
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}