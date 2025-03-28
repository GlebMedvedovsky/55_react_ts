import { ChangeEvent, useState } from 'react';
import './style.css';
import Input from '../../components/Input/Input';
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import AvatarImg from "../../assets/avatar.jpg";
import Button from '../../components/Button/Button';
function Lesson08() {
//Неконтролируемый элемент(компонент) - элемент, который контролируется браузером
  //Контролируемый элемент(компонент) - элемент, который контролируется c помощью React
  // 1 шаг контроля - создание state, в котором будет храниться значение поля
  const [message, setMessage] = useState<string>('');
  const [showMessage, setShowMessege] = useState<boolean>(false)

  // 2 шаг контроля - использование state в компоненте
  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setMessage(event.target.value)
  }
  const showMessageHandler = () => {
    setShowMessege(!showMessage);
  }

  return (
    <div className="lesson08-container">
            <Input
        name='message'
        label='Message'
        id='message_id'
        placeholder='Enter your message'
        value={message}
        onChange={onChangeMessage}
      />
      <Button name='Show Message' onClick={showMessageHandler} />
      {/* showMessage?<div>{message}</div>  */}
      {showMessage && <div>{message}</div>}
      <EmployeeCard
        name="Mary Smith"
        position="Software Engineer"
        department="IT"
        img={AvatarImg}
      >
        <h3>The best employee</h3>
      </EmployeeCard>
    </div>
  );
}
export default Lesson08;