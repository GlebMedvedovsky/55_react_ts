import styled from "@emotion/styled";

// Интерфейс для карточек
interface CardProps {
  vip?: boolean;
}

// Контейнер для всех карточек
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Контейнер для карточек (заменяем обычный <div>)
export const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

// Заголовок "User Types"
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`;

// Карточка пользователя
export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: ${({ vip }) => (vip ? "350px" : "300px")};
  height: ${({ vip }) => (vip ? "450px" : "400px")};
  background-color: ${({ vip }) => (vip ? "#FFD700" : "#E0E0E0")};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

// Заголовок карточки
export const CardTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

// Описание карточки
export const CardDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
`;

// Аватарка
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
