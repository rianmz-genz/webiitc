import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllCategoryApi = async () => {
  try {
    const res = await axios({
      baseURL: urlCompetitionCategory,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default GetAllCategoryApi;
