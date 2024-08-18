import endpoints from "../config";
import axios from "axios";

export const getDestinations = async () => {
  try {
    const response = await axios.get(endpoints.destinations);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
