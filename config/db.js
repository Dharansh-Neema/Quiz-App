const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;
exports.connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Connection Failed");
      console.log(error);
      process.exit(1);
    });
};
