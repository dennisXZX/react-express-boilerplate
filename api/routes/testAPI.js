const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  const response = {
    name: 'Dennis',
    age: 18
  };

  res.json(response);
});

module.exports = router;
