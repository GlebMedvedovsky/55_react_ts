import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 600px;
  padding: 40px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  align-self: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
`;

