import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spiner"
import { Homework12Container, FactWrapper, ErrorMessage } from "./styles";

function Homework12() {
  // Стейты
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // URL для запроса
  const FACT_URL: string = "https://catfact.ninja/fact";

  // Функция для запроса факта
  const getFact = async () => {
    setError(undefined); // Обнуляем ошибку при новом запросе
    setIsLoading(true); // Включаем спиннер
    try {
      const response = await axios.get(FACT_URL);
      setFact(response.data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Выключаем спиннер
    }
  };

  // Загружаем факт при первом рендере
  useEffect(() => {
    getFact();
  }, []);

  return (
    <Homework12Container>
      <Button name="GET MORE FACTS" onClick={getFact} disabled={isLoading} />
      <FactWrapper>{isLoading ? <Spinner /> : fact}</FactWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Homework12Container>
  );
}

export default Homework12;
