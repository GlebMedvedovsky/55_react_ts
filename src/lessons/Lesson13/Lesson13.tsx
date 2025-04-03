import { useEffect, useState } from "react";
import axios from "axios";
import {
  Lesson13Container,
  ControlsContainer,
  ScrollContainer,
  ButtonsWrapper,
  InputField,
  Button,
  DeleteButton,
  ImageWrapper,
  Spinner,
  ErrorMessage,
} from "./styles";

function Lesson13() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImage = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImages((prevImages) => [...prevImages, response.data.message]);
    } catch (err) {
      setError("Some Network error");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAllImages = () => {
    setImages([]);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Lesson13Container>
      <ControlsContainer>
        <InputField
          placeholder="Enter text..."
          onChange={fetchImage} // Запрос на изменение ввода
        />
        <ButtonsWrapper>
          <Button onClick={fetchImage} disabled={isLoading}>
            GET MORE IMAGES
          </Button>
          {images.length > 0 && (
            <DeleteButton onClick={deleteAllImages}>
              DELETE ALL DATA
            </DeleteButton>
          )}
        </ButtonsWrapper>
        {isLoading && <Spinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ControlsContainer>

      <ScrollContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt="Random Dog" />
          </ImageWrapper>
        ))}
      </ScrollContainer>
    </Lesson13Container>
  );
}

export default Lesson13;
