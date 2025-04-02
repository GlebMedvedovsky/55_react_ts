import styled from "@emotion/styled";

// Контейнер
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin: auto;
`;

// Блок для вывода количества изменений
export const Result = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: rgb(61, 97, 205);
`;
