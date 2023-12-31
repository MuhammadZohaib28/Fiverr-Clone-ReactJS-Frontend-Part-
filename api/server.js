import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("NADRA DATABASE ACCESS DENIED");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8800, () => {
  connect();
  console.log("backend server is running");
});
