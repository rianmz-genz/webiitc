import Cookies from "js-cookie";

const GetToken = ({ isAdmin = false }) => {
  const token = Cookies.get(!isAdmin ? "token" : "adminKey");
  //console.log(token);
  token ? token : "Unauthorized";
  return `Bearer ${token}`;
};

export default GetToken;
