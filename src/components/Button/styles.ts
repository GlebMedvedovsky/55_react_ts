import styled from "@emotion/styled";

interface MainButtonStyledProps {
  danger?: boolean;
  fullWidth?: boolean; // Добавляем опциональный пропс
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? "300px" : "auto")}; // Гибкая ширина
  height: fit-content;
  padding: 10px 20px; // Уменьшаем padding для компактности
  background: ${({ danger }) => (danger ? "rgb(176, 44, 11)" : "rgb(17, 48, 127)")};
  border: none;
  border-radius: 6px;
  font-size: 16px; // Уменьшаем шрифт
  color: white;
  cursor: pointer;
  align-self: flex-start; // Выравниваем по левому краю
  margin: 5px 0; // Добавляем отступы
`;