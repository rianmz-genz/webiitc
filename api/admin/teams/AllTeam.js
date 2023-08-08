import UrlAdminTeam from "@/api/routes/team/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllTeamAdminApi = async () => {
  try {
    const res = await axios({
      baseURL: UrlAdminTeam,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default GetAllTeamAdminApi;
