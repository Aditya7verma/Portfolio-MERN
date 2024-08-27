const mongoose = require("mongoose");

// env
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting to Database");
});

connection.on("connected", () => {
  console.log("MongoDB connection Successful!!");
});

module.exports = connection;
