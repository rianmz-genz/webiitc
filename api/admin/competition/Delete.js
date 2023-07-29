import { urlGetCompetitions } from "@/api/routes/homepage/GetCompetitions";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const DeleteCompetitionApi = async ({ slug }) => {
  try {
    const res = await axios({
      method: "DELETE",
      baseURL: `${urlGetCompetitions}/${slug}`,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default DeleteCompetitionApi;
