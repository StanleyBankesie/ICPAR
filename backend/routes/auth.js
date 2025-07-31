const express = require("express");
const {
  userRegistration,
  userLogin,
  getUserProfile,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.get("/profile", authMiddleware, getUserProfile);
module.exports = router;
