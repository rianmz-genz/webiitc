import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllCategoryApi = async () => {
  try {
    const res = await axios({
      baseURL: urlCompetitionCategory,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default GetAllCategoryApi;
