import axios from "axios";

export const getAllTransaction = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/transactions");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchBorrow = async (data: object) => {
  try {
    const response = await axios.post("http://localhost:3000/api/transactions", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchReturn = async (data: object) => {
  try {
    const response = await axios.patch("http://localhost:3000/api/transactions", data);
    return response;
  } catch (error) {
    return error;
  }
};
