/** @format */

import { CATEGORY } from "./endpoints";
import { Axios } from "./index";

export const addCategory = (category) => {
  return Axios.post(`${CATEGORY}`, category);
};
export const getCategory = () => {
  return Axios.get(`${CATEGORY}`);
};
