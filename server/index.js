const express = require("express");
const app = express();
const cors = require("cors");
const Blog = require("./db");
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());

app.get("/techBlogs", async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
    console.log(blog);
  } catch (error) {
    res.status(401).json({ error: "Can't find blogs" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
