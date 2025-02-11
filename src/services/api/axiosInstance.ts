import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: "https://api.github.com",
 headers: {
  Accept: "application/vnd.github.v3+json",
 },
});
