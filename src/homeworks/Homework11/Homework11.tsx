import { useState, useEffect, ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import { Container, Result } from "./styles";

function Homework11() {
  // State для первого input
  const [firstValue, setFirstValue] = useState<string>("");
  // State для второго input
  const [secondValue, setSecondValue] = useState<string>("");
  // State для подсчета изменений в первом input
  const [changeCount, setChangeCount] = useState<number>(-1);

  // Функция изменения значения в первом input
  const handleFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(event.target.value);
  };

  // Функция изменения значения во втором input
  const handleSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondValue(event.target.value);
  };

  // Используем useEffect для отслеживания изменений первого input
  useEffect(() => {
    setChangeCount((prev) => prev + 1);
  }, [firstValue]);

  return (
    <Container>
      <h2>Homework 11</h2>
      <Input name="firstInput" value={firstValue} onChange={handleFirstInputChange} />
      <Input name="secondInput" value={secondValue} onChange={handleSecondInputChange} />
      <Result>Количество изменений первого Input: {changeCount}</Result>
    </Container>
  );
}

export default Homework11;

// <<<<<<  zweite variante !!! >>>
// import { ChangeEvent, useEffect, useState } from "react";
// import Input from "../../components/Input/Input";
// import { Homework11Container, Result } from "./styles";
// function Homework11() {
//   const [note, setNote] = useState<string>('');
//   const [additNote, setAdditNote] = useState<string>('');
//   const [countNoteChange, setCountNoteChange] = useState<number>(0);
//   const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
//     setNote(event.target.value)
//   }
//   const onAdditChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
//     setAdditNote(event.target.value)
//   }
//   useEffect(() => {
//     if(note)
//     setCountNoteChange((prevValue) => prevValue + 1)
//   }, [note])
//  return (
//     <Homework11Container>
//       <Input
//         name='note'
//         placeholder='Enter your note'
//         value={note}
//         onChange={onChangeNote} />
//       <Result>Количество изменение в поле Note {countNoteChange}</Result>
//       <Input
//         name='note_additional'
//         placeholder='Enter your additional note'
//         value={additNote}
//         onChange={onAdditChangeNote} />
//     </Homework11Container>
//   )
// }
