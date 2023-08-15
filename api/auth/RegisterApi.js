import axios from "axios";
import { urlRegister } from "../routes/auth";

const RegisterApi = async ({ email, password, fullName, phone }) => {
  try {
    const data = { email, password, fullName, phone };
    const res = await axios({
      baseURL: urlRegister,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "Request timeout coba lagi!",
    });
    return res.data;
    console.log(res.data);
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
    // return error.response.data;
  }
};

export default RegisterApi;
