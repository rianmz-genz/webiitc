import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
const GetDetailCompetitionsApi = async ({ slug }) => {
  try {
    const res = await axios({
      baseURL: `${urlGetCompetitions}/${slug}`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default GetDetailCompetitionsApi;
