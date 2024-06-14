const express = require("express");
const router = express.Router();
const User = require("../Models/userData");

// Create a new user
router.post("/", async (req, res) => {
  const newItem = new User({
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    nationality: req.body.nationality,
    gender: req.body.gender,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all user
router.get("/", async (req, res) => {
  try {
    const items = await User.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an user
router.put("/:id", async (req, res) => {
  try {
    const item = await User.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "User Data not found" });

    item.name = req.body.name;
    (item.password = req.body.password),
      (item.confirmPassword = req.body.confirmPassword),
      (item.firstName = req.body.firstName),
      (item.lastName = req.body.lastName),
      (item.userName = req.body.userName),
      (item.nationality = req.body.nationality),
      (item.gender = req.body.gender);

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an user
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id from back", id);
    if (!id) return res.status(500).json("Id not Found");
    await User.findByIdAndDelete(id);
    return res.status(200).json("User Data has been deleted");
  } catch (error) {
    return res.status(500).json(err);
  }
});

module.exports = router;
