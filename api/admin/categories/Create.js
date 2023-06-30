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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default CreateCategoryApi;
