const express = require("express");
const router = express.Router();
const User = require("../db/user");

router.get('/', (req, res, next) => {
  User.getAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;
