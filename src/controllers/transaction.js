// import models here

const {transaction, product, user} = require("../../models");

exports.getTransactions = async (req, res) => {
  // code here
  try {
    
    const data = await transaction.findAll({
      include: [
        {
          model: product,
          as: 'product',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'idUser']
          }
        },
        {
          model: user,
          as: 'buyer',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password']
          }
        },
        {
          model: user,
          as: 'seller',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password']
          }
        }
      ]
    })

    res.send({
      status: 'success',
      data
    })

  } catch (error) {
    console.log(error)
    res.send({
        status: 'failed',
        message: 'Server Error'
    })
  }
};

exports.addTransaction = async (req, res) => {
  // code here
};