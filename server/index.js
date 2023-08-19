import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// intialise the dotenv
dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((error) => {
    console.log("Error while connecting to database ... " + error);
  });

const app = express();

// to send the data in json format
app.use(express.json());

app.listen(3000, (req, res) => {
  console.log("Server is running on port : 3000");
});

// API
app.use("/api/user", userRoutes);

// API For the User registration
app.use("/api/auth", authRoutes);

//Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
