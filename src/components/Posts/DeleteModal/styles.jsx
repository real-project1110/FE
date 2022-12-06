import styled from "styled-components";

export const DeleteBox = styled.div`
  width: 450px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem 2rem;
`;

export const Confirm = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  text-align: center;
  margin: 10% auto 0 auto;
`;

export const Cancel = styled.button`
  width: 89px;
  height: 36px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #aaaaaa;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
    color: #ffffff;
  }
`;

export const Ok = styled.button`
  width: 89px;
  height: 36px;
  margin-left: 5%;
  background-color: ${(props) => props.theme.color.green};
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;
