const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
// Routes
const routes = require("./Routes/ToDoRoute");
app.use(routes);

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to mongoDB..."))
  .catch((err) => console.log("ERROR(mongoDB not connected)"));

// Listening to Server
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
