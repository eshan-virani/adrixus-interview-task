import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {
  Nav,
  NavContainer,
  Logo,
  Icon,
  Menu,
  MenuItem,
  MenuLink,
  Profile,
  MenuDiv,
} from "./styles";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavContainer>
            <Logo to="/">Users</Logo>
            <Icon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </Icon>

            <MenuDiv>
              <Profile>{userName} | Admin</Profile>
              <Menu onClick={handleLogout} click={click}>
                <MenuItem>
                  <MenuLink to="/Logout">Logout</MenuLink>
                </MenuItem>
              </Menu>
            </MenuDiv>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
