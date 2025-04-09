import { Route, Routes } from "react-router-dom";
import { CourseContainer, Title, List, ListItem } from "./steles"

const Course = () => {
  return (
    <CourseContainer>
      <Title>React Lessons</Title>
      <List>
        <ListItem>JSX</ListItem>
        <ListItem>Components</ListItem>
        <ListItem>Props</ListItem>
        <ListItem>State</ListItem>
        <ListItem>Hooks</ListItem>
        <ListItem>Routing</ListItem>
    
      </List>
    </CourseContainer>
  );
};


<Routes>
  <Route path="/course" element={<Course />} />
</Routes>

export default Course;
