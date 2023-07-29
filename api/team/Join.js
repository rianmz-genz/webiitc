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
    });
    //console.log(res.data);
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

export default JoinApi;
