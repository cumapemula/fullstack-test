import axios from "axios";

export const getAllMember = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/members");
    return response.data;
  } catch (error) {
    return error;
  }
};
