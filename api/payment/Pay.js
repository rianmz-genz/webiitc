import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlPayment from "../routes/payment";

const PayApi = async ({ proveOfPayment, id }) => {
  const data = {
    proveOfPayment,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlPayment}/${id}`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export default PayApi;
