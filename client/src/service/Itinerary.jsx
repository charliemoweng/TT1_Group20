import axios from "axios";

export const createClaim = async () => {
  const response = await axios.get("/create-claim");
  if (response.status !== 200) {
    return null;
  }

  return response.data;
};
