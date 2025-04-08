import styled from "@emotion/styled";

export const Homework15Container = styled.div`
  padding: 50px;
  width: 300px;
  margin: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
export const CheckboxContainer = styled.div`
  margin-bottom: 10px;
`;