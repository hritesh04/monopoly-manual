const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Record, Player } = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_LINK).then(() => console.log("DB Connected"));

let player = 0;

app.put("/", async (req, res) => {
  player = parseInt(req.headers.players);
  console.log(player);
  for (i = 1; i <= player; i++) {
    const newPlayer = new Player();
    newPlayer.playerId = i;
    newPlayer.amount = 15000000;
    await newPlayer.save();
  }
  console.log("Players Created");
  res.status(200).json({ message: "Players Created" });
});

app.post("/", async (req, res) => {
  const { sender, receiver, amount, description } = req.body;
  console.log(req.body);
  const senderAcc = await Player.findOne({ playerId: sender });
  const receiverAcc = await Player.findOne({ playerId: receiver });
  if (!senderAcc || !receiverAcc) {
    res.status(401).json({ message: "Invalid PlayerNumber" }).end();
  } else if (senderAcc.amount < amount) {
    res.status(401).json({ message: "Not Enough Money" }).end();
  } else {
    const senderTransaction = await Player.findOneAndUpdate(
      { playerId: sender },
      { amount: parseInt(senderAcc.amount) - parseInt(amount) }
    );
    const receiverTransaction = await Player.findOneAndUpdate(
      { playerId: receiver },
      { amount: parseInt(receiverAcc.amount) + parseInt(amount) }
    );
    const event = new Record();
    event.sender = sender;
    event.receiver = receiver;
    event.amount = amount;
    event.description = description;
    await event.save();
    const afterTransaction = await Player.findOne({ playerId: sender });
    res.status(200).json(afterTransaction);
  }
});

app.get("/:playerId", async (req, res) => {
  const { playerId } = req.params;
  console.log(playerId);
  const events = await Record.find({
    $or: [{ sender: playerId }, { receiver: playerId }],
  });
  console.log(events);
  res.status(200).json({ events });
});

app.get("/check/:playerId", async (req, res) => {
  const { playerId } = req.params;
  const balance = await Player.findOne({ playerId: playerId });
  res.status(200).json({ balance });
});

app.listen(3000, (req, res) => {
  console.log("Server is On!");
});
