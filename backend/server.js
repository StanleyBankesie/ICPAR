// Load environment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");
const blogsRouter = require("./routes/blogRoutes");
const mediaRouter = require("./routes/mediaRoutes");
const authRouter = require("./routes/auth");

// Initialize express app
const app = express();
dotenv.config();

// Built-in body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to MongoDB
connectToDB();

// Routes
app.use("/api/blogs", blogsRouter);
app.use("/api/media", mediaRouter);
app.use("/api/auth", authRouter);

// Root route
app.get("/", (req, res) => {
  res.send("<h2>ICPAR Backend</h2>");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Authentication middleware
