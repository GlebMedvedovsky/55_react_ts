import styled from "@emotion/styled";

export const Consultation06Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(19, 4, 104);
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 4px;
  width: 300px;
  min-height: 300px;
  background-color: white;
  color: black;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: rgb(19, 4, 104);
`;

export const UserInfo = styled.div`
  font-size: 16px;
  color: black;
`;

export const ErrorMessage = styled.div`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const RefreshButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;
