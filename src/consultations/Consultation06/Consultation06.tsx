import { useEffect, useState } from "react";
import axios from "axios";
import { 
  Consultation06Container, 
  UserCard, 
  Avatar, 
  ErrorMessage, 
  Spinner, 
  UserName, 
  UserInfo, 
  RefreshButton
} from "./styles";

function Consultation06() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getRandomUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      console.log("User data:", response.data.results[0]); 
      setUser(response.data.results[0]);
    } catch (err) {
      setError("Some Network error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomUser(); 
  }, []);

  return (
    <Consultation06Container>
      <RefreshButton onClick={getRandomUser}>
        Refresh User
      </RefreshButton>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <UserCard>
  
  <Avatar src={user.picture.large} alt="User Avatar" />
  <UserName>{`${user.name.first} ${user.name.last}`}</UserName>
  <UserInfo>📞 {user.phone}</UserInfo>
  <UserInfo>✉️ {user.email}</UserInfo>
</UserCard>

      )}
    </Consultation06Container>
  );
}

export default Consultation06;
