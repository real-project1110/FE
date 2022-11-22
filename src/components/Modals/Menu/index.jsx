import React from "react";
import styled from "styled-components";

const Menu = ({ children, onCloseModal, right = 0, top = 0 }) => {
  return (
    <Wrapper onClick={onCloseModal}>
      <MenuBox top={top} right={right}>
        {children}
      </MenuBox>
    </Wrapper>
  );
};

export default Menu;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export const MenuBox = styled.div`
  position: absolute;
  display: inline-block;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  border-radius: 6px;
  max-width: 360px;
  z-index: 512;
  max-height: calc(100vh - 20px);
  color: rgb(29, 28, 29);
  right: ${(props) => props.right};
  top: ${(props) => props.top};
`;
