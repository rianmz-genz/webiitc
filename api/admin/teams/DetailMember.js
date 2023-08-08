import axios from "axios";
import UrlAdminTeam from "@/api/routes/team/admin";
import GetToken from "@/api/utils/GetToken";

const GetDetailTeamMember = async ({ id }) => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${UrlAdminTeam}/${id}`,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

export default GetDetailTeamMember;
