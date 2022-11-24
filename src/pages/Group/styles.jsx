import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Body = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  grid-template-columns: 60px 260px 1fr;
`;
