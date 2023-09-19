import axios from "axios";
const handleRecords = async (id, setEvents) => {
  await axios.get(`http://localhost:3000/${id}`).then((res) => {
    setEvents(res.data.events);
    console.log(res.data.events);
  });
};

export default handleRecords;
