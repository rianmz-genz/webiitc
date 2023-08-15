import axios from "axios";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
const GetCompetitionsApi = async () => {
  try {
    const res = await axios({
      baseURL: urlGetCompetitions,
      timeout: 20000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if ((error.code = "ECONNABORTED")) {
      console.log(error.message);
    } else {
      return error.response.data;
    }
    // return error.response.data;
  }
};

export default GetCompetitionsApi;
