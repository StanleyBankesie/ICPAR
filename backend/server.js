// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");
const blogsRouter = require("./routes/blogRoutes")
const mediaRouter = require("./routes/mediaRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// database function invocation
connectToDB()

//api core endpoint
app.use('/api', blogsRouter)
app.use("/api", mediaRouter);

app.get('/', (req, res)=> {
  res.send("<h2>ICPAR Backend</h2>")
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
