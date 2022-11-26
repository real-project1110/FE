import styled from "styled-components";

export const StatusBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
`;

export const CalendarLogo = styled.div`
  margin-left: 10px;
`;

export const AddStatus = styled.div`
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const StatusList = styled.div`
  margin-left: 2%;
  margin-top: 4px;
  display: flex;
  vertical-align: middle;
`;
export const StatusColor = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.value};
  border-radius: 8px;
`;

export const StatusName = styled.div`
  margin-top: -3px;
  margin-left: 5px;
`;
