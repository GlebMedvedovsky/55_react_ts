import styled from "@emotion/styled";

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(73, 137, 202); /* Яркий фон, можно поменять */
`;

export const FactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  font-size: 24px;
  color: rgb(31, 17, 69);
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  font-size: 28px;
  color: red;
  font-weight: bold;
`;