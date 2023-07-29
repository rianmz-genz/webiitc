import urlCompetitionCategory from "@/api/routes/admin";
import UrlTeam from "@/api/routes/team";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
const GetDetailTeamAdminApi = async ({ id }) => {
  try {
    const res = await axios({
      baseURL: `${UrlTeam}/${id}/admin`,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default GetDetailTeamAdminApi;
