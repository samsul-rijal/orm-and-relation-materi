const express = require("express");

const router = express.Router();

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
// import controller function here
const { getProduct } = require("../controllers/product");

const { getTransactions } = require("../controllers/transaction");

// Route
router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

// add route here
router.get("/products", getProduct);
router.get("/transactions", getTransactions);


module.exports = router;
