import axios from "axios";
import { urlLogin } from "../routes/auth";

const LoginApi = async ({ email, password }) => {
  try {
    const data = { email, password };
    const res = await axios({
      baseURL: urlLogin,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default LoginApi;
