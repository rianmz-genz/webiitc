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
      timeout: 30000,
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
export default JoinTeamApi;
