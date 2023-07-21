import React from "react";
import UrlTeam from "../routes/team";

const JoinApi = async ({ code, teamId }) => {
  const data = {
    code,
  };
  try {
    const res = await axios({
      method: "PUT",
      baseURL: `${UrlTeam}/${teamId}/join`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default JoinApi;
