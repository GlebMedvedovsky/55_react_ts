import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home"; 
import GlobalStyles from "./styles/GlobalStyles";
import Lesson14 from "./lessons/Lesson14/Lesson14";
import Homework12 from "./homeworks/Homework12/Homework12";
import Course from "./pages/Course/Course"; // 🆕 добавили!

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lesson14 />} />
          <Route path="/homeworks" element={<Homework12 />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} /> {/* 🆕 новый маршрут */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
