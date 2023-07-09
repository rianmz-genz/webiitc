import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
const GetCompetitionsApi = async () => {
  try {
    const res = await axios({
      baseURL: urlGetCompetitions,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetCompetitionsApi;
