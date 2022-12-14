const express = require("express");

const userRouter = require("./userRoute");
const propertyRouter = require("./propertyRoute");
const router = require("./userRoute");

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/user", userRouter);
  router.use("/property", propertyRouter);
}

module.exports = routerApi;
