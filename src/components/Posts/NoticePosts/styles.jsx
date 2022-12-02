import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
  height: 46px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -5.5%;
  line-height: 46px;
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
