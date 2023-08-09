import axios from "axios";
import UrlTeam from "../routes/team";
import GetToken from "../utils/GetToken";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";

const GetMineTeam = async () => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${urlGetCompetitions}/mine`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
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

export default GetMineTeam;
