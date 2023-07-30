import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const CreateCategoryApi = async ({ competitionName }) => {
  const data = {
    name: competitionName,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: urlCompetitionCategory,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default CreateCategoryApi;
