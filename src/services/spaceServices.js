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


export const getCrew = async () => {
  try {
    const response = await axios.get(endpoints.crew);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getTechnologies = async () => {
  try {
    const response = await axios.get(endpoints.technology);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};