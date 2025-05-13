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

// Initialize express app
const app = express();
dotenv.config();

// Middleware: CORS configuration
//const corsOptions = {
// origin: "https://icpar.vercel.app",
//  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//  credentials: true,
//};

//app.use(cors(corsOptions));
//app.options("*", cors(corsOptions));

// Custom headers for preflight
//app.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "https://icpar.vercel.app");
// res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
//  res.header(
//   "Access-Control-Allow-Headers",
//   "Origin, X-Requested-With, Content-Type, Accept"
// );
// res.header("Access-Control-Allow-Credentials", "true");
// next();
//});

// Built-in body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://icpar.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Optional: File Upload Middleware Setup (e.g., using multer)
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" }); // Basic local upload setup

// Connect to MongoDB
connectToDB();

// Routes
app.use("/api", blogsRouter);
app.use("/api", mediaRouter);

// Root route
app.get("/", (req, res) => {
  res.send("<h2>ICPAR Backend</h2>");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
