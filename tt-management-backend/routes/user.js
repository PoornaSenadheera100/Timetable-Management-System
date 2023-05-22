const router = require("express").Router();
let User = require("../models/User");

router.route("/").get(async (req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").post((req, res) => {
  const { userId, userName, email, password, userType, other } = req.body;
  const newUser = new User({
    userId,
    userName,
    email,
    password,
    userType,
    other,
  });
  newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
