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
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetDetailUser;
