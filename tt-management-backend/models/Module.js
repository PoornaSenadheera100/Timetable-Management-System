const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  moduleId: {
    type: String,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  lecturerId: {
    type: String,
    required: true,
  },
  academicYear: {
    type: Number,
    required: true,
  },
});
