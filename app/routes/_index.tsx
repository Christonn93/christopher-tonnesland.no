import { useEffect, useState } from "react";
import { getGithubUser } from "../api/githubApi";
import { UserData } from "./routes.type";

const Index: React.FC = () => {
 const [userData, setUserData] = useState<UserData>();

 useEffect(() => {
  const fetchUserData = async () => {
   try {
    const user = await getGithubUser("christonn93");
    setUserData(user);
   } catch (error) {
    console.error("Failed to fetch GitHub user data:", error);
   }
  };
  fetchUserData();
 }, []);

 return (
  <main>
   {userData ? (
    <div>
     <h2>{userData.name}</h2>
     <p>{userData.bio}</p>
     <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
      GitHub Profile
     </a>
    </div>
   ) : (
    <p>Loading...</p>
   )}
  </main>
 );
};

export default Index;
