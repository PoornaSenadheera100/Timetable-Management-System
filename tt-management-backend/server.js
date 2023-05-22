const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8070;

require("dotenv").config();

MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success!");
});

const moduleRouter = require("./routes/module");
app.use("/module", moduleRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
