const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("mongoose connectded");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
