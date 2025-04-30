const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    //console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected ✅ Database:", connection.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
