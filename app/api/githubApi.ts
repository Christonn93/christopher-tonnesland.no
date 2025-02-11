import axios from "axios";

const axiosInstance = axios.create({
 baseURL: "https://api.github.com",
 headers: {
  Accept: "application/vnd.github.v3+json",
 },
});

export const getGithubUser = async (username: string) => {
 try {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
 } catch (error) {
  console.error("Error fetching GitHub data:", error);
  throw error;
 }
};
