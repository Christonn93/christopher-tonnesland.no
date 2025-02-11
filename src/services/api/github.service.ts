import { axiosInstance } from "./axiosInstance";

export const getGithubUser = async (username: string) => {
 try {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
 } catch (error) {
  console.error("Error fetching GitHub data:", error);
  throw error;
 }
};

export const getGithubProjects = async (username: string) => {
 try {
  const response = await axiosInstance.get(`/users/${username}/repos`);
  return response.data;
 } catch (error) {
  console.error("Error fetching GitHub repositories:", error);
  throw error;
 }
};
