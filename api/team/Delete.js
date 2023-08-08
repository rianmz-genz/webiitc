import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlTeam from "../routes/team";

const DeleteTeamApi = async ({ teamId }) => {
  try {
    const res = await axios({
      method: "DELETE",
      baseURL: `${UrlTeam}/${teamId}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 3000,
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
export default DeleteTeamApi;
