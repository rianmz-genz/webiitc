import axios from "axios";
import GetToken from "../utils/GetToken";
import UrlUser from "../routes/user";

const DeleteUserApi = async ({ uid }) => {
  try {
    const res = await axios({
      method: "DELETE",
      baseURL: `${UrlUser}/${uid}`,
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
      return error.response.data;
    }
  }
};

export default DeleteUserApi;
