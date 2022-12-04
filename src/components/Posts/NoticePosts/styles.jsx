import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Title = styled.p`
  margin-top: 1.5%;
  font-weight: 700;
  font-size: 14px;
`;

export const Notice = styled.h3`
  padding: 0 1rem 1rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

export const AllPost = styled.div`
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
