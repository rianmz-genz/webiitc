import axios from "axios";
import React from "react";
import UrlTeam from "../routes/team";
import GetToken from "../utils/GetToken";

const GetDetailTeam = async ({ id }) => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${UrlTeam}/${id}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 5000,
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

export default GetDetailTeam;
