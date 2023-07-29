import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlTeam from "../routes/team";

const JoinTeamApi = async ({ name, competitionSlug }) => {
  const data = {
    name: name,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlTeam}/${competitionSlug}`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
        "Content-Type": "multipart/form-data",
      },
    });
    //console.log(res.data);
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};
export default JoinTeamApi;
