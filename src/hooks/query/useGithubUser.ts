import { getGithubUser } from "../../services/api/github.service";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGithubUser = (isEnabled: boolean) => {
 const queryFn = async () => {
  try {
   return await getGithubUser("christonn93");
  } catch (error) {
   toast.error(`${String(error)}`);
   throw error;
  }
 };

 const { data, isLoading, error, refetch } = useQuery({
  queryKey: ["githubUser"],
  queryFn,
  staleTime: 5 * 60 * 1000,
  enabled: isEnabled,
 });

 return { data, isLoading, error, refetch };
};
