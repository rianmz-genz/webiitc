import axios from "axios";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
const GetCompetitionsApi = async () => {
  try {
    const res = await axios({
      baseURL: urlGetCompetitions,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default GetCompetitionsApi;
