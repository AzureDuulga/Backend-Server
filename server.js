const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const restaurantRoutes = require("./Routes/restaurantRoute.js");
const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/restaurants", restaurantRoutes);

connectDB(MONGO_URI);

app.listen(port, () => {
  console.log(`Сервер ${port} дээр аслаа`);
});
