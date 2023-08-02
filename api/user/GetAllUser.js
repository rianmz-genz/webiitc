import axios from "axios";
import GetToken from "../utils/GetToken";
import UrlUser from "../routes/user";

const GetAllUserApi = async () => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${UrlUser}`,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetAllUserApi;
