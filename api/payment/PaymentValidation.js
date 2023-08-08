import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlPayment from "../routes/payment";

const PaymentValidationApi = async ({ isApprove, reason, id }) => {
  const data = {
    isApprove,
    reason,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlPayment}/${id}/payment-status`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
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
export default PaymentValidationApi;
