import axios from "axios";
const handlePlayerSelection = async (
  sender,
  receiver,
  amount,
  description,
  setEvents,
  setCurrent
) => {
  console.log(sender);
  await axios
    .post(
      "http://localhost:3000/",
      { sender, receiver, amount, description },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => setCurrent(res.data))
    .catch((err) => {
      console.log(err.response.data);
      setCurrent((prevCurrent) => err.response.data);
    });
  setEvents(...setEvents, { sender, receiver, amount, description });
};

export default handlePlayerSelection;
