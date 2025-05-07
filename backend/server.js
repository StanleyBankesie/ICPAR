if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");
const blogsRouter = require("./routes/blogRoutes");
const mediaRouter = require("./routes/mediaRoutes");

dotenv.config();
const app = express();

// Middleware

const corsOptions = {
  origin: "https://www.icpar.vercel.app",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://www.icpar.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database function invocation
connectToDB();

//api core endpoint
app.use("/api", blogsRouter);
app.use("/api", mediaRouter);

app.get("/", (req, res) => {
  res.send("<h2>ICPAR Backend</h2>");
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
