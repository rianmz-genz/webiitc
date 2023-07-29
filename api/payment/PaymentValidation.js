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
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export default PaymentValidationApi;
