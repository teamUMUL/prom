import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SideMenuItem from "./SideMenuItem";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.8px solid #949494;
  background: #F3F3F3;
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.20) inset;
  height: 5vh;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  position: relative;
  z-index: 20;
  width:250px;
  height:100vh;
  background-color: #F3F3F3;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) =>
    (sidebar ? `0` : `-100%`)
  };
  border-right: 0.5px solid #949494;
  transition: left 0.3s ease;
`;


const ToggleButton = styled.button`

`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:3rem;
  font-size: 2rem;
  padding-left: 2rem;
`;

const SidebarWrap = styled.div`

`;


export default function SideMenu() {

  const [sidebar, setSidebar] = useState(false)


  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavIcon to="#" onClick={toggleSidebar}>
            <AiOutlineMenu />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#" onClick={toggleSidebar}>
              <AiOutlineClose />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SideMenuItem item={item} key={index} toggleSidebar={toggleSidebar} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <Outlet />
    </>
  )
}