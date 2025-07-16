const express = require('express');
const router = express.Router();

// In-memory data store
let foodItems = [];
let userChoices = [];

// Get all food items
router.get('/food-items', (req, res) => {
  res.json(foodItems);
});

// Add a new food item
router.post('/food-items', (req, res) => {
  const newFoodItem = {
    id: foodItems.length + 1,
    name: req.body.name,
  };
  foodItems.push(newFoodItem);
  res.status(201).json(newFoodItem);
});

// Get all user choices
router.get('/user-choices', (req, res) => {
  res.json(userChoices);
});

// Add a new user choice
router.post('/user-choices', (req, res) => {
  const newUserChoice = {
    id: userChoices.length + 1,
    userId: req.body.userId,
    foodItemId: req.body.foodItemId,
  };
  userChoices.push(newUserChoice);
  res.status(201).json(newUserChoice);
});

module.exports = router;
