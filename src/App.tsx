import GlobalStyles from "./styles/GlobalStyles"

//Lessons imports
// импорт компонента Lesson06 по умолчанию
// при импорте по умолчанию можно использовать другое названия для компонента
// import Task6 from './lessons/Lesson06/Lesson06';
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from "./lessons/Lesson07/Lesson07"
// import Lesson08 from "./lessons/Lesson08/Lesson08"
// import Lesson09 from "./lessons/Lesson09/Lesson09"
// import Lesson10 from "./lessons/Lesson10/Lesson10"
// import Lesson11 from "./lessons/Lesson11/Lesson11";


//Homeworks imports
// import Homework06 from "./homeworks/Homework06/Homework06"
// import Homework07 from "./homeworks/homework07/Homework07"
// import Homework08 from "./homeworks/Homework08/homework08"
// import Homework09 from "./homeworks/Homework09/Homework09"; 
import Homework11 from "./homeworks/Homework11/Homework11";

// Consulation imports:
// import Consultation05 from "./consultations/Consultation05/Consultation05";



function App() {

  return (
    <>
    <GlobalStyles/>
      {/* <Consultation05 /> */}
      <Homework11 />

    </>
  )
}

export default App