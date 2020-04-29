/** MicroBlog express app. */


const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// add logging system

const morgan = require("morgan");
app.use(morgan("tiny"));


const postsRoutes = require("./routes/posts");
const postCommentsRoutes = require("./routes/postComments");

app.use("/api/posts", postsRoutes);
app.use("/api/posts/:post_id/comments", postCommentsRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  if (err.stack) console.error(err.stack);

  res.status(err.status || 500);
  
  return res.json({
    error: err,
    message: err.message
  });
});


module.exports = app;