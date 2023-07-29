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
    });
    return res.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

export default GetDetailTeam;
