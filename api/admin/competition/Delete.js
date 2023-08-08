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
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if ((error.code = "ECONNABORTED")) {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default DeleteCompetitionApi;
