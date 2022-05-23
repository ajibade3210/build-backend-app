//Import statements
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product.routes");
require("dotenv").config();

//middleware
const app = express();
app.use(express.json());
app.use("/products", router);

//Routes
app.get("/", (req, res) => {
  res.send("Hello Guyss");
});

//COnnection and Port
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => console.log("Listening On Server"));
