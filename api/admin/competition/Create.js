import axios from "axios";
import GetToken from "@/api/utils/GetToken";
import { urlGetCompetitions } from "@/api/routes/homepage/GetCompetitions";

const CreateCompetitionApi = async ({
  cover,
  name,
  isIndividu,
  selectedCategories,
  deadline,
  maxMembers,
  price,
  techStack,
  description,
  guideBookLink,
  criteria,
}) => {
  try {
    const formData = new FormData();
    formData.append("cover", cover);
    formData.append("name", name);
    formData.append("isIndividu", isIndividu);
    formData.append("categories", JSON.stringify(selectedCategories));
    formData.append("deadline", deadline);
    formData.append("maxMembers", maxMembers);
    formData.append("price", price);
    formData.append("techStacks", JSON.stringify(techStack));
    formData.append("description", description);
    formData.append("guideBookLink", guideBookLink);
    formData.append("criteria", JSON.stringify(criteria));
    // Menggunakan metode forEach()
    formData.forEach((value, key) => {});
    const res = await axios({
      method: "POST",
      baseURL: urlGetCompetitions,
      data: formData,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
        "Content-Type": "multipart/form-data",
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

export default CreateCompetitionApi;
