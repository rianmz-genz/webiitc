import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const EditCategoryApi = async ({ id, name }) => {
  const data = { name };
  try {
    const res = await axios({
      method: "PUT",
      data,
      baseURL: `${urlCompetitionCategory}/${id}`,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default EditCategoryApi;
