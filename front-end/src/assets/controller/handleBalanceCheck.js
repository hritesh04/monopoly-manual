import axios from "axios";
const handleBalanceCheck = async (player, setBalance) => {
  await axios.get(`http://localhost:3000/check/${player}`).then((res) => {
    console.log(res);
    setBalance(res.data.balance.amount);
  });
};

export default handleBalanceCheck;
