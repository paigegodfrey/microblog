import axios from 'axios';
import { FETCH_TITLES } from "./types";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
const API_URL = `${BASE_URL}/api/posts`;

export const fetchTitlesFromAPI = () => {
  return async dispatch => {
    const response = await axios.get(`${API_URL}`);
    return dispatch(getTitles(response.data));
  };
}

const getTitles = titles => {
  return {
    type: FETCH_TITLES,
    titles,
  };
}

