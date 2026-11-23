const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
  });
});