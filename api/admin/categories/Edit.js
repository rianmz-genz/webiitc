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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default EditCategoryApi;
