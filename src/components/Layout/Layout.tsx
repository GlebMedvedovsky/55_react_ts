import { Link, NavLink } from "react-router-dom"


import {
  LayoutComponent,
  Header,
  LogoText,
  Nav,
  Main,
  Footer
} from "./styles"
import { LayoutProps } from "./types"
function Layout({children} : LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoText>Company name</LogoText>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/lessons">Lessons</NavLink>
          <NavLink to="/homeworks">Homeworks</NavLink>
          <NavLink to="/consultations">Consultations</NavLink>
          <Link to="/course">Course</Link>

        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  )
}
export default Layout