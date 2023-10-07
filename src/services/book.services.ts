import axios from "axios";

export const getAllBook = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/books");
    return response.data;
  } catch (error) {
    return error;
  }
};
