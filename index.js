const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const authRouter = require("./authRouter");

const URL_DB =
  "mongodb+srv://admin:123@cluster0.ahxvvop.mongodb.net/auth_role?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(URL_DB);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
