const mongoose = require("mongoose");
const recordsSchemma = new mongoose.Schema({
  sender: String,
  receiver: String,
  description: String,
  amount: Number,
});

const playerSchemma = new mongoose.Schema({
  playerId: Number,
  amount: Number,
});
const Record = mongoose.model("Records", recordsSchemma);
const Player = mongoose.model("Players", playerSchemma);

module.exports = {
  Record,
  Player,
};
