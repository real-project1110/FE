import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const DetailWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const DetailPost = styled.div`
  ${FlexCenterBox}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  & > div {
    width: 100%;
    max-width: 600px;
    height: 100vh;
    max-height: 500px;
    margin: 4% auto 4% auto;
    background-color: #ffffff;
    border-radius: 8px;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  padding: 1rem 2rem;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 1.4;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;
