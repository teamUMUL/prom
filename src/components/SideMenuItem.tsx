import styled from "styled-components";
import { SidebarItem } from "../models/SidebarItem";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

type SidebarLinkProps = {
  item: SidebarItem;
  toggleSidebar: (sidebar: boolean) => void
};

const SidebarLink = styled(Link) <{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 3.75rem;
  font-size: 1.5rem;
  padding: 2rem;
  text-decoration:none;
  color: #000;
  border-bottom: 0.8px solid #B9B7B6;
  background-color: ${({ isSelected }) =>
    (isSelected ? `#dadada` : `none`)
  };
  &:hover{
    background-color: #acacac
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;

`;

export default function SideMenuItem({ item, toggleSidebar }: SidebarLinkProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    toggleSidebar(false);
  };

  return (
    <>
      <SidebarLink to={item.path} isSelected={location.pathname === item.path} onClick={handleClick}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  )
}