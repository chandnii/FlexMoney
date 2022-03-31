module.exports = (app) => {
  const flexmoney = require("../controllers/flexmoney.js");

  var router = require("express").Router();

  //get all the campaigns list for frotend use
  router.get("/postPaymentDetail", flexmoney.postPaymentDetail);

  app.use("/api/flexmoney", router);
};
