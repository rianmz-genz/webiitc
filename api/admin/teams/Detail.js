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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetDetailTeamAdminApi;
