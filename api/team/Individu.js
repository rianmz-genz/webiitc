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
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default JoinIndividuApi;
