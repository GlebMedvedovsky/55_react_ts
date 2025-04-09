import styled from "@emotion/styled";

export const CourseContainer = styled.div`
  padding: 40px;
  background-color: #f0f8ff;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`;

export const LessonList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LessonItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  color: #555;
`;

export const List = styled.a`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  color: #555;
`;
