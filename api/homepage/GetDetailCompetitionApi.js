import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
const GetDetailCompetitionsApi = async ({ slug }) => {
  try {
    const res = await axios({
      baseURL: `${urlGetCompetitions}/${slug}`,
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

export default GetDetailCompetitionsApi;
