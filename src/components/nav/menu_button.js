import React, { useState } from "react";
import NavBarRight from "./navbar_right";
import styled_comp from "styled-components";
import '../../App.css';

const MenuStyle = styled_comp.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 10px;
right: 20px;
z-index: 20;
display: none;
cursor: pointer;
@media (max-width: 800px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => (open ? "#333" : "#333")};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  
  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    //transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
}
`;

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuStyle>
      <NavBarRight open={open} />
    </>
  );
};

export default MenuButton;