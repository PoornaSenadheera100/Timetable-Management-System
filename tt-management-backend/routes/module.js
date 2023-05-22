const router = require("express").Router();
let Module = require("../models/Module");

router.route("/").get(async (req, res) => {
  Module.find()
    .then((module) => {
      res.json(module);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").post((req, res) => {
  const { moduleId, moduleName, duration, lecturerId, academicYear } = req.body;
  const newModule = new Module({
    moduleId,
    moduleName,
    duration,
    lecturerId,
    academicYear,
  });
  newModule
    .save()
    .then(() => {
      res.json("Module Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
