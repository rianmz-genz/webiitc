import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlTeam from "../routes/team";

const EditTeamApi = async ({ name, teamId, avatar, title, submission }) => {
  const data = {
    name,
    avatar,
    title,
    submission,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlTeam}/${teamId}/update`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
        "Content-Type": "multipart/form-data",
      },
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};
export default EditTeamApi;
