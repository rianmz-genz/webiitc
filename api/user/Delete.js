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
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default DeleteUserApi;
