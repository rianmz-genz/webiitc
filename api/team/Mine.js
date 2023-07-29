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
    });
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

export default GetMineTeam;
