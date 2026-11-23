const express = require("express");
const connectDB = require("./db");
const notesRoutes = require("./routes/notes");

const app = express();
app.use(express.json());

app.use("/notes", notesRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
  });
});