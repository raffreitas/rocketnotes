import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api2.herokuapp.com"
});
