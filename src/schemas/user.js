const { Schema, model } = require("mongoose");

const schema = Schema({
  userID: { type: String, default: "" },
  codes: { type: Array, default: [] },
});

module.exports = model("user", schema);