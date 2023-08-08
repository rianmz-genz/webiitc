import axios from "axios";
import GetToken from "@/api/utils/GetToken";
import UrlProfile from "@/api/routes/profile";

const EditUser = async (data) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      // If the field is a file field and the value is an instance of File,
      // append it to the form data.
      if (
        (key === "avatar" || key === "photoIdentity" || key === "twibbon") &&
        data[key] instanceof File
      ) {
        formData.append(key, data[key]);
      }
      // If it's not a file field, append it to the form data.
      else if (
        key !== "avatar" &&
        key !== "photoIdentity" &&
        key !== "twibbon"
      ) {
        formData.append(key, data[key]);
      }
      // Note: If the field is a file field but the value is not a file, it's not appended to the form data.
    });

    const response = await axios({
      url: `${UrlProfile}`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      console.log(error);
      return error.response
        ? error.response.data
        : { message: "Unknown error" };
    }
  }
};

export default EditUser;
