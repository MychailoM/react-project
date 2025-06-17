import React from "react";
import styled from "styled-components";
import { FaBowlFood } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./index.css"

const HeaderWrap = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: rgb(246, 217, 178);
  border-bottom: 2.5px solid black;
`;
const Container = styled.div`
  width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
const NavLink = styled.a`
  text-decoration: none;
  color: rgb(150, 113, 64);
  text-transform: uppercase;
  font-size: 24px;
`;

const Contacts = styled.div`
  display: flex;
  gap: 30px;
`;
const Contact = styled.a`
  text-decoration: none;
  color: rgb(150, 113, 64);
  text-transform: uppercase;
  font-size: 24px;
  
`;

function Header() {
  return (
    <HeaderWrap>
      <Container>
        <Logo>
          <FaBowlFood size={32} style={{ fill: "rgb(161, 124, 75)" }} />
        </Logo>

        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Recipies</NavLink>
          <NavLink href="#">About</NavLink>
        </Nav>

        <Contacts>
          <Contact href="#">
            <MdEmail style={{ fill: "rgb(161, 124, 75)" }} /> food@gmail.com
          </Contact>
          <Contact href="#">
            <FaPhoneAlt style={{ fill: "rgb(161, 124, 75)" }} /> +380 98 88 5885
          </Contact>
        </Contacts>
      </Container>
    </HeaderWrap>
  );
}

export default Header;