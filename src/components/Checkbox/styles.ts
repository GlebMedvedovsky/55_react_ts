import styled from "@emotion/styled";


export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;
