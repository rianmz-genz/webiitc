import axios from "axios";
import GetToken from "../utils/GetToken";
import UrlIndividu from "../routes/team/individu";

const JoinIndividuApi = async ({ competitionSlug }) => {
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlIndividu}/${competitionSlug}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default JoinIndividuApi;
