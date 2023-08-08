import axios from "axios";
import UrlProfile from "../routes/profile";
import GetToken from "../utils/GetToken";

const GetDetailUser = async () => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${UrlProfile}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
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

export default GetDetailUser;
