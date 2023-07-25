import urlCompetitionCategory from "@/api/routes/admin";
import UrlTeam from "@/api/routes/team";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllTeamApi = async () => {
  try {
    const res = await axios({
      baseURL: UrlTeam,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetAllTeamApi;
