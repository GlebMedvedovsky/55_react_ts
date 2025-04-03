import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  flex: 1;
  padding: 40px;
  background-color: rgb(230, 240, 250);
  height: 100vh;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 55%;
  height: 700px;
  overflow-y: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  width: 100%;
  height: 40px;
  border: 2px solid #007bff;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #0056b3;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const ImageWrapper = styled.div`
  width: calc(50% - 10px);

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const ErrorMessage = styled.div`
  font-size: 20px;
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
