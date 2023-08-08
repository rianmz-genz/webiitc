import React from "react";
import UrlTeam from "../routes/team";
import axios from "axios";
import GetToken from "../utils/GetToken";

const JoinApi = async ({ code }) => {
  const data = {
    code,
  };
  try {
    const res = await axios({
      method: "PUT",
      baseURL: `${UrlTeam}/join`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
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

export default JoinApi;
