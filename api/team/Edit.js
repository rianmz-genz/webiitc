import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlTeam from "../routes/team";

const EditTeamApi = async ({ name, teamId, avatar, title }) => {
  const data = {
    name,
    avatar,
    title,
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
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export default EditTeamApi;
