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
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      console.log(error);
      return error.response.data;
    }
  }
};

export default GetAllUserApi;
