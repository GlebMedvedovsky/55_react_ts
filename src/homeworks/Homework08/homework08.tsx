import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './styles.css'
function Homework08() {
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
  }
  const showPassword = () => {
    setIsShowPassword(true)
  }
  const hidePassword = () => {
    setIsShowPassword(false)
  }

  return (
    <div className="homework08-container">
      <h1>Change password</h1>
      <Input
        name='password'
        label='Password'
        id='password_id'
        placeholder="Enter your password"
        type='password'
        value={passwordValue}
        onChange={onChangePassword}
      />
      <Button onClick={showPassword}>SHOW PASSWORD</Button>
      <Button onClick={hidePassword}>HIDE PASSWORD</Button>
      {isShowPassword && <div className="result-container">{passwordValue}</div>}
      <Button onClick={handleSubmit}>SUBMIT PASSWORD</Button>
    </div>
  )
}
function handleSubmit(): void {
    alert("Password submitted successfully!");
}

export default Homework08;

