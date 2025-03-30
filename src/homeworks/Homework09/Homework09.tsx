import {
    Container,
    CardsWrapper,
    Title,
    Card,
    Avatar,
    CardTitle,
    CardDescription,
  } from "./styles";
  import vipAvatar from "./assets/vip-avatar.jpg";
  import regularAvatar from "./assets/regular-avatar.jpg";
  
  function Homework09() {
    return (
      <Container>
        <Title>User Types</Title>
        <CardsWrapper>
          <Card vip>
            <Avatar src={vipAvatar} alt="VIP Пользователь" />
            <CardTitle>VIP Пользователь</CardTitle>
            <CardDescription>
              Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.
            </CardDescription>
          </Card>
  
          <Card>
            <Avatar src={regularAvatar} alt="Обычный Пользователь" />
            <CardTitle>Обычный Пользователь</CardTitle>
            <CardDescription>
              Стандартный доступ, базовые функции и поддержка в порядке очереди.
            </CardDescription>
          </Card>
        </CardsWrapper>
      </Container>
    );
  }
  
  export default Homework09;
  