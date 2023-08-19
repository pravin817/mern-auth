import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

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

app.listen(3000, (req, res) => {
  console.log("Server is running on port : 3000");
});

// API
app.use("/api/user/", userRoutes);
