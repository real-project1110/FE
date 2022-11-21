import styled from "styled-components";

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const New = styled.div`
  margin-top: 15.5px;
  cursor: pointer;
`;

export const Newest = styled.span`
  margin-right: 13px;
  font-size: 14px;
  font-weight: 700;
`;

export const NewestComment = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray};
`;
