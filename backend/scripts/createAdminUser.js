const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config({ path: __dirname + "/../.env" });

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const username = "admin"; // Change as needed
    const password = "password123"; // Change as needed

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    const adminUser = new User({
      username,
      password,
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
};

createAdminUser();
