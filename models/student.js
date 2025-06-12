const mongoose = require("mongoose");

const studSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
});

const studModel = mongoose.model("studModel", studSchema);

module.exports = studModel;
