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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default DeleteCompetitionApi;
