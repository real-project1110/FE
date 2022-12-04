import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  //background-color: #ffffff;
  border-radius: 5px;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 1.5%;
  font-weight: 700;
  font-size: 14px;
`;

export const NoticeTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const Notice = styled(NoticeTitle)`
  padding: 0 4%;
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
