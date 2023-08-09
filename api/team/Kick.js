import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlTeam from "../routes/team";

const KickApi = async ({ teamId, memberId }) => {
  try {
    const res = await axios({
      method: "DELETE",
      baseURL: `${UrlTeam}/${teamId}/members/${memberId}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 20000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    //console.log(res.data);
    return res.data;
  } catch (error) {
    //console.log(error);
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};
export default KickApi;
