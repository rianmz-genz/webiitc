import axios from "axios";
import UrlTeam from "../routes/team";
import GetToken from "../utils/GetToken";
import { urlGetCompetitions } from "../routes/homepage/GetCompetitions";
import { urlVerify } from "../routes/auth";

const VerifyEmailApi = async ({ id, hash, signature, expires }) => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${urlVerify}/${id}/${hash}?signature=${signature}&expires=${expires}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
    });
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

export default VerifyEmailApi;
