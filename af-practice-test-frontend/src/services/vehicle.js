/** @format */

import { VEHICLE, VEHICLE_STATUS } from "./endpoints";
import { Axios } from "./index";

export const addVehicle = (vehicle) => {
  return Axios.post(`${VEHICLE}`, vehicle);
};
export const getAllVehicle = () => {
  return Axios.get(`${VEHICLE}`);
};
export const getByStatus = (id) => {
  return Axios.post(`${VEHICLE_STATUS}${id}`);
};
