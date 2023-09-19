import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import handleRecords from "../controller/handleRecords";
import handleAmountExchange from "../controller/handleAmountExchange";
import handleBalanceCheck from "../controller/handleBalanceCheck";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [player, setPlayer] = useState("");
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [record, setRecord] = useState("");
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState({});
  const [description, setDescription] = useState("");
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          placeholder="PlayerNumber"
          onChange={(event) => setRecord(event.target.value)}
        />
        <button onClick={() => handleRecords(record, setEvents)}>
          Check Records
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="playerId"
          onChange={(event) => setPlayer(event.target.value)}
        />
        <button onClick={() => handleBalanceCheck(player, setBalance)}>
          Check
        </button>
        <span style={{ marginLeft: "30px" }}>{balance}</span>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          placeholder="Sender"
          onChange={(event) => setSender(event.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={(event) => setAmount(event.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver"
          onChange={(event) => setReceiver(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          onClick={() => {
            handleAmountExchange(
              sender,
              receiver,
              amount,
              description,
              setEvents,
              setCurrent
            );
            console.log(current);
          }}
        >
          Submit
        </button>
      </div>
      {current && (
        <div
          style={{
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginBottom: "50px",
            justifyContent: "space-around",
          }}
        >
          {/* {current.forEach((element) => {})} */}
          <h4>{current.playerId}</h4>
          <h4>{current.amount}</h4>
          <h4>{current?.message}</h4>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h4>Sender</h4>
        <h4>Amount</h4>
        <h4>Receiver</h4>
        <h4>Description</h4>
      </div>
      <div>
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-around",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <h4>{event.sender}</h4>
            <h4>{event.amount}</h4>
            <h4>{event.receiver}</h4>
            <h4>{event.description}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
