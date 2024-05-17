var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json("Iam router");
});

module.exports = router;
