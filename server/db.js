const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
