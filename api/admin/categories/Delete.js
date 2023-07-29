import urlCompetitionCategory from "@/api/routes/admin";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const DeleteCategoryApi = async ({ id }) => {
  try {
    const res = await axios({
      method: "DELETE",
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

export default DeleteCategoryApi;
