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
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    const res = await axios({
      method: "POST",
      baseURL: urlGetCompetitions,
      data: formData,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default CreateCompetitionApi;
