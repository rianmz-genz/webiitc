import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllCategoryApi = async () => {
  try {
    const res = await axios({
      baseURL: urlCompetitionCategory,
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

export default GetAllCategoryApi;
