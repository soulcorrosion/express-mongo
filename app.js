const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRoutes");

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017",
  //process.env.MONGODB_URI || "mongodb://root:root@mongo:27017",
  {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    dbName: 'test',
    user: 'root',
    pass: 'root'
  }
).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {   
    console.log(err);
  });


//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
