const db = require("../models");
const Tutorial = db.tutorials;
const request = require("request");

exports.postPaymentDetail = (req, res) => {
  const options = {
    method: "POST",
    url: "https://run.mocky.io/v3/0b14a8da-5fc7-4443-8511-53d687399bc9",
    headers: {
      "Content-type": "application/json",
      origin: "https://instacred.me",
    },
  };
  request(options, function (error, response) {
    if (error)
      res.status(500).send({
        message: error.message || "Unable to submit payment detail",
      });
    const responses = JSON.parse(response.body);
    res.send(responses);
  });
};
